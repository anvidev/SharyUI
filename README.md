# SharyUI

## Customised UI library for [myshary.com](https://myshary.com/feed)

SharyUI was built to speed up implementation flow of Shary's developers and to help them improve design consistency by having a centralised design center for all of their UI components.

## Installation

SharyUI is available as an [npm package](https://www.npmjs.com/package/sharyui).

**Requirements:**

All of the components in SharyUI are designed with the latest version of Tailwind CSS, which is currently version 3.2. That means that Tailwind needs to be installed in your project in order for our components works. This can be done by running:

```sh
npm install tailwindcss@latest
# or
yarn add tailwindcss@latest
```

Next, make sure to init tailwind as per their documentation, and import the library stylesheet from `node_modules/sharyui/dist/styles.css` in your `main.js` file or in your root component. This is due to an issue with tailwind not compiling the classes when used with storybook at the moment.

**npm:**

```sh
npm install sharyui
```

**yarn:**

```sh
yarn add sharyui
```

## Getting started with SharyUI

Here is an example of a basic app using SharyUI's `Button` component:

```jsx
import { Button } from 'sharyui';

function App() {
  return <Button variant="secondary">Hello World</Button>;
}
```

## List of components

- [x] Button
- [ ] Icon button
- [x] Label
- [x] Input
- [x] Heading
- [x] Text
- [x] Select (missing multiple choice)
- [x] Checkbox
- [x] Radio
- [x] Avatar
- [ ] Tooltip
- [ ] Modal
- [ ] Input Group
- [x] Checkbox Group
- [x] Radio Group

## Documentation

- [Developer documentation](https://shary-ui.vercel.app)
- [Figma design](https://placeholder.com)
