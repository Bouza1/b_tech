"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var componentName = process.argv[2];
if (!componentName) {
    console.error('Please provide a component name');
    process.exit(1);
}
// Define the file path and content
var componentPath = path_1.default.join(__dirname, '..', "".concat(componentName, ".tsx"));
var componentContent = "const ".concat(componentName, " = () => {\n    return (\n        <div>Component Empty</div>\n    );\n}\n\nexport default ").concat(componentName, ";\n");
// Write the file
fs_1.default.writeFile(componentPath, componentContent, function (err) {
    if (err) {
        console.error('Error creating component:', err);
        process.exit(1);
    }
    else {
        console.log("".concat(componentName, ".tsx has been created successfully."));
    }
});
