# 安装 Rust

要在您的计算机上安装 Rust，最简单的方法是使用 `rustup`，这是一个用于管理 Rust 版本和相关工具的命令行工具。

## 在 Windows 上安装

1. 访问 [Rust 官方安装页面](https://www.rust-lang.org/tools/install)。
2. 下载并运行 `rustup-init.exe`。
3. 按照屏幕上的提示进行操作（通常按 `1` 选择默认安装即可）。

*注意：在 Windows 上，Rust 需要 C++ 构建工具。您可以安装 [Visual Studio](https://visualstudio.microsoft.com/zh-hans/downloads/) 并勾选“使用 C++ 的桌面开发”工作负载。*

## 在 Linux 或 macOS 上安装

打开终端并运行以下命令：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

该脚本将下载并安装 Rust 的最新稳定版本。安装完成后，您可能需要重启终端，或者运行以下命令使环境变量生效：

```bash
source $HOME/.cargo/env
```

## 验证安装

要检查是否正确安装了 Rust，请打开终端或命令提示符，并运行以下命令：

```bash
rustc --version
```

如果看到类似 `rustc 1.x.y (hash date)` 的输出，说明安装成功！

## 更新与卸载

- **更新 Rust**：如果您想更新到最新版本，只需运行 `rustup update`。
- **卸载 Rust**：如果您想卸载 Rust 及其工具，请运行 `rustup self uninstall`。
