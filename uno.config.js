import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { classes } from '@warp-ds/css/component-classes/classes';

export default defineConfig({
  presets: [presetWarp({ externalClasses: classes, skipResets: true })],
  cli: {
    entry: {
        patterns: ['src/components/*.vue', 'src/**/*.vue'],
        outFile: 'src/styles/uno.css',
    },
},
});