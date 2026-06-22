import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '程序员轻叶的Rust学习记录',
  description: '程序员轻叶的Rust学习记录',
  lang: 'zh',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: '程序员轻叶的Rust学习记录',
      description: '程序员轻叶的Rust学习记录',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
