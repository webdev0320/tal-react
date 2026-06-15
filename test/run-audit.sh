#!/bin/bash

WP_DIR="wp-extracted-pages"
REACT_DIR="src/pages" # Adjust this to where your React page files live
REPORT_FILE="audit_report.md"

echo "# Content Audit Report Generated on $(date)" > $REPORT_FILE
echo "Starting audit..."

# Loop through every extracted WordPress page file
for wp_file in "$WP_DIR"/*.txt; do
    # Get the slug name (e.g., "about-us" from "./wp-extracted-pages/about-us.txt")
    slug=$(basename "$wp_file" .txt)
    
    # Try to find a matching React file (checking for .js, .jsx, or .tsx)
    react_file=""
    if [ -f "$REACT_DIR/$slug.jsx" ]; then
        react_file="$REACT_DIR/$slug.jsx"
    elif [ -f "$REACT_DIR/$slug.tsx" ]; then
        react_file="$REACT_DIR/$slug.tsx"
    elif [ -f "$REACT_DIR/$slug.js" ]; then
        react_file="$REACT_DIR/$slug.js"
    elif [ -f "$REACT_DIR/$slug/index.jsx" ]; then # Handle folder-structured routes
        react_file="$REACT_DIR/$slug/index.jsx"
    fi

    if [ -n "$react_file" ]; then
        echo "Auditing: /$slug..."
        echo -e "\n## Page: /$slug" >> $REPORT_FILE
        
        # Call Gemini CLI passing the system prompt, the WP content, and the React content
        # Note: Adjust the exact CLI binary command name ("gemini") based on your specific CLI tool setup
        gemini run \
          --system "$(cat system-prompt.txt)" \
          --prompt "Compare the following original WordPress content with the React component file." \
          --files "$wp_file" "$react_file" >> $REPORT_FILE
          
        echo "---------------------------------------" >> $REPORT_FILE
    else
        echo "Warning: No matching React file found for slug: /$slug"
        echo -e "\n## Page: /$slug\n- **STATUS: SKIP** (No matching React component found)" >> $REPORT_FILE
    fi
done

echo "Audit complete! Results saved to $REPORT_FILE"