import {
  defineConfig,
  presetAttributify, presetIcons, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
