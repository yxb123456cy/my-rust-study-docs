# Rust中的 loop 循环

Rust 提供了三种循环：`loop`、`while` 和 `for`。本节我们将详细介绍 `loop` 循环。

`loop` 关键字会告诉 Rust 反复执行一段代码，直到你明确地告诉它停止。

## 基本的 loop

如果你直接写一个 `loop`，它会创建一个无限循环。你需要使用 `break` 关键字来跳出循环，或者使用 `continue` 跳过当前迭代并进入下一次迭代。

```rust
fn main() {
    let mut count = 0;

    loop {
        count += 1;
        println!("当前的 count 是: {}", count);

        if count == 3 {
            println!("达到 3，准备退出循环");
            break; // 退出循环
        }
    }
}
```

## 从 loop 中返回值

`loop` 循环不仅可以用来重复执行操作，还可以作为一个**表达式**返回一个值。你可以将要返回的值放在 `break` 关键字后面。

这在重试可能会失败的操作时非常有用，比如检查一个线程是否完成了任务。

```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            // 当 counter 为 10 时跳出循环，并返回 counter * 2 的值
            break counter * 2;
        }
    };

    println!("循环返回的结果是: {}", result); // 输出 20
}
```

在上面的例子中，`loop` 表达式的返回值被赋给了变量 `result`。注意 `let` 语句末尾的分号。

## 循环标签 (Loop Labels)

当你有嵌套循环时，`break` 和 `continue` 默认只作用于最内层的循环。如果你想要跳出或继续外层循环，你可以给外层循环加上一个**标签 (label)**。

循环标签以单引号 `'` 开头。

```rust
fn main() {
    let mut count = 0;
    
    // 给外层循环打上标签 'counting_up
    'counting_up: loop {
        println!("外层循环 count = {}", count);
        let mut remaining = 10;

        loop {
            println!("内层循环 remaining = {}", remaining);
            if remaining == 9 {
                break; // 这只会跳出内层循环
            }
            if count == 2 {
                break 'counting_up; // 这会直接跳出带有 'counting_up 标签的外层循环
            }
            remaining -= 1;
        }

        count += 1;
    }
    
    println!("结束时 count = {}", count);
}
```

使用标签可以让嵌套循环的控制流变得更加清晰和准确。
