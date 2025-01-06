# Corporate page of Ithaca, LLC.

Based on “Dante Astro Theme” by JustGoodUI
This project incorporates the Dante Astro Theme originally created by JustGoodUI.
The theme is licensed under the GNU General Public License v3.0 (GPL-3.0).

## Modifications
Customized colors, layout tweaks, restructured content sections, add Japanese fonts.

## Key points of GPL-3.0 compliance:

### Source Code Availability
If you modify and distribute the code, you must also make your modified source code available under the same GPL-3.0 license.

### Retaining Copyright Notices
All existing copyright notices in the Dante Astro Theme and any additional notices you include must remain intact.

### License Notice
Do not remove or alter the licensing and copyright statements.
Provide a copy of the GPL-3.0 (i.e., the LICENSE file) whenever you distribute your version.

### Disclaimer of Warranty
The GPL-3.0 disclaims warranties to the extent permitted by applicable law. You must keep this disclaimer intact.

## Copyright
© 2025 Ithaca LLC
Includes works © 2025 [JustGoodUI] under GPL-3.0
Disclaimer
This project (including any modifications or derivative works) is provided “as is,” without any warranty of any kind. See the LICENSE for details.

## Credits
JustGoodUI/dante-astro-theme for the original theme.

## Template Integrations

- @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/mdx - https://docs.astro.build/en/guides/markdown-content/
- @astrojs/rss - https://docs.astro.build/en/guides/rss/

## Project Structure

Inside of Dante Astro theme, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── icons/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro (`.astro`) components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Astro.js Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## License

Licensed under the [GPL-3.0](https://github.com/JustGoodUI/dante-astro-theme/blob/main/LICENSE) license.
