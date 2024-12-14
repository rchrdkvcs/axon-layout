import {defineConfig, presetWebFonts, presetWind} from 'unocss'

export default defineConfig({
    presets: [
        presetWind(),
        presetWebFonts({
            fonts: {
                'mono': 'Roboto Serif, monospace'
            }
        })
    ]
})