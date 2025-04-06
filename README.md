# 🧩 React Button Component Library

A customizable and reusable **React button component** built for flexibility and modern styling. Developed by [VinithKumar](https://github.com/vinith4), this component is perfect for rapid development with props for styling, interactivity, and more.

[![npm version](https://img.shields.io/npm/v/@vinith4/react-button-component-library)](https://www.npmjs.com/package/@vinith4/react-button-component-library)
[![license](https://img.shields.io/npm/l/@vinith4/react-button-component-library)](LICENSE)

---

## 🚀 Features

- Fully customizable via props  
- TypeScript support  
- Responsive hover effects  
- Clean, modern design  
- Easy to integrate into any React project  

---

## 📦 Installation

```bash
npm install @vinith4/react-button-component-library
```

or using yarn:

```bash
yarn add @vinith4/react-button-component-library
```

---

## 🧠 Usage

```tsx
import React from 'react';
import Button from '@vinith4/react-button-component-library';

const App = () => {
  return (
    <Button
      label="Click Me"
      backgroundColor="#6200EE"
      color="#FFFFFF"
      hoverColor="#3700B3"
      width="200px"
      height="50px"
      radius="8px"
      shadow="0px 4px 10px rgba(0,0,0,0.1)"
      onClick={() => alert('Button clicked!')}
    />
  );
};

export default App;
```

---

## ⚙️ Props

| Prop             | Type       | Default      | Description                                      |
|------------------|------------|--------------|--------------------------------------------------|
| `label`          | `string`   | — *(required)* | Text shown on the button                        |
| `backgroundColor`| `string`   | `#007BFF`     | Button background color                         |
| `color`          | `string`   | `white`       | Text color                                       |
| `hoverColor`     | `string`   | —             | Background color on hover                        |
| `width`          | `string`   | `150px`       | Width of the button                              |
| `height`         | `string`   | `40px`        | Height of the button                             |
| `radius`         | `string`   | `5px`         | Border radius                                    |
| `disabled`       | `boolean`  | `false`       | Disables the button                              |
| `shadow`         | `string`   | `none`        | Adds box shadow                                  |
| `onClick`        | `function` | `undefined`   | Callback when the button is clicked              |

---

## 🧪 Running Storybook Locally

```bash
npm install
npm run storybook
```

> View and interact with all component variations in an isolated environment.

---

## 🤝 Contributing

Pull requests and issues are welcome!

1. Fork this repo  
2. Create your feature branch: `git checkout -b feature/YourFeature`  
3. Commit your changes: `git commit -m 'Add some feature'`  
4. Push to the branch: `git push origin feature/YourFeature`  
5. Submit a pull request  

---

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Author

Made with ❤️ by [VinithKumar](https://github.com/vinith4)
