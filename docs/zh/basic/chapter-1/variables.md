# 使用 let 与 let mut 定义变量

在 Rust 中，变量默认是**不可变的（immutable）**。这是 Rust 提供安全性并帮助我们写出并发代码的核心特性之一。

## 使用 let 定义不可变变量

我们使用 `let` 关键字来声明一个变量。因为变量默认是不可变的，一旦值被绑定到该变量，您就不能再改变它的值。

```rust
fn main() {
    let x = 5;
    println!("The value of x is: {}", x);
    
    // 如果取消下面这行代码的注释，编译器会报错，因为 x 是不可变的
    // x = 6;
}
```

当我们尝试修改不可变变量时，Rust 编译器会给出一个编译期错误（如 `cannot assign twice to immutable variable`）。这种设计使得代码更加安全，您可以在阅读代码时确信，某个不可变变量的值在整个作用域内都不会改变。

## 使用 let mut 定义可变变量

虽然默认不可变很好，但有时我们需要变量的值是可以改变的。在声明变量时，在变量名前加上 `mut` 关键字，就可以让它变成**可变的（mutable）**。

```rust
fn main() {
    let mut y = 5;
    println!("The value of y is: {}", y);
    
    y = 6; // 这是合法的，因为 y 被声明为可变的
    println!("The value of y is now: {}", y);
}
```

使用 `mut` 可以在需要的时候改变变量的值，同时也向其他阅读代码的人清晰地传达了“这个变量的值在后面可能会被修改”的意图。

## 变量遮蔽（Shadowing）

Rust 允许我们声明一个新的变量，并且与之前声明的变量同名。这被称为**变量遮蔽（Shadowing）**。

```rust
fn main() {
    let x = 5;

    // 这里遮蔽了上面的 x
    let x = x + 1;

    {
        // 在内部作用域再次遮蔽 x
        let x = x * 2;
        println!("The value of x in the inner scope is: {}", x); // 输出 12
    }

    println!("The value of x is: {}", x); // 输出 6
}
```

遮蔽与 `mut` 的区别在于：
1. 遮蔽是通过再次使用 `let` 关键字创建了一个**全新的变量**，我们可以改变变量的类型，也可以重用同一个名字。
2. 如果使用 `mut`，我们只能修改值，但不能改变变量的类型。

例如，改变类型的遮蔽是合法的：

```rust
let spaces = "   ";
// 重新绑定为整数类型，这是合法的
let spaces = spaces.len();
```

但如果我们使用 `mut` 尝试改变类型，编译器会报错：

```rust
let mut spaces = "   ";
// 报错：expected `&str`, found `usize`
// spaces = spaces.len();
```
