const sourceMap = require('source-map');
const fs = require('fs');

fs.readFile('./bundle.map', 'utf8', function (err, data) {
    const smc = new sourceMap.SourceMapConsumer(data);

    const lines = process.argv[2];

    try {
        lines.split(" ").forEach(v => {
            const d = v.split("@")[1].split(":");
            const pos = (smc.originalPositionFor({
                line: d[0] * 1,
                column: d[1] * 1
            }));
            const filename = pos.source.replace(/.+\/Daybreak\//, "")
                console.log(`${filename}:${pos.line} ${pos.name}`)
        })
    } catch(e) {
        console.log("Run as: `node decodeStack.js <stack data>`\n\
stack data is copied from Crashlytics starting after 'stack:', so for example, with:\n\n\
    Unhandled JS Exception: not thenable, stack: value@1:14642 notifyAll@5:24939 ...\n\n\
<stack data> is the text from `value@1....`\n\
Note: `./bundle.map` must be present and generated from the same code that is running on the device.\n\
To generate the source map, check out the correct revision for the build, and run:\n\n\
    react-native bundle --entry-file=index.ios.js --platform ios --sourcemap-output bundle.map --dev false --bundle-output bundle.js\n\
");
    }
});
