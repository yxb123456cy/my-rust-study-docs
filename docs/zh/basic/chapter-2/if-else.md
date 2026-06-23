# if与else

在 Rust 中，`if` 表达式允许你根据条件执行不同的代码分支。与很多语言不同，Rust 中的 `if` 是一个**表达式 (expression)**，这意味着它可以返回一个值。

## 基本用法

最基本的 `if` 语句格式如下：

```rust
fn main() {
    let number = 3;

    if number < 5 {
        println!("条件为 true");
    } else {
        println!("条件为 false");
    }
}
```

### 重要的几点

1. **条件必须是 `bool` 类型**：Rust 不会自动将非布尔类型转换为布尔类型（比如不会像 C/C++ 或 JavaScript 那样把 `0` 当作 `false`，非零当作 `true`）。你必须显式地提供一个 `bool` 值。
2. **不需要括号**：与 C 语言不同，Rust 中的条件表达式不需要用圆括号 `()` 包裹。
3. **必须有大括号**：即使 `if` 或 `else` 分支只有一行代码，也必须用大括号 `{}` 包裹代码块。

如果条件不是 `bool`，编译器会报错：

```rust
// ❌ 错误示例：预期是 bool 类型
let number = 3;
if number { // 编译错误：expected `bool`, found integer
    println!("数字是 3");
}
```

## 多重条件：else if

可以使用 `else if` 来处理多个条件：

```rust
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("数字能被 4 整除");
    } else if number % 3 == 0 {
        println!("数字能被 3 整除");
    } else if number % 2 == 0 {
        println!("数字能被 2 整除");
    } else {
        println!("数字不能被 4, 3, 或 2 整除");
    }
}
```

**注意**：Rust 会从上到下执行条件判断，一旦找到一个为 `true` 的条件，就会执行对应的代码块，并跳过后续的条件检查。

## 在 let 语句中使用 if

因为 `if` 是一个**表达式**，我们可以将它的结果绑定给一个变量。这类似于其他语言中的三元运算符 (`? :`)，但更加强大。

```rust
fn main() {
    let condition = true;
    
    // if 表达式返回的值将被赋给 number
    let number = if condition { 5 } else { 6 };

    println!("数字的值是: {}", number); // 输出 5
}
```

### 返回值类型必须一致

当你在 `let` 语句中使用 `if` 表达式时，`if` 分支和 `else` 分支返回的**类型必须相同**。

```rust
// ❌ 错误示例：if 和 else 返回不同类型
let condition = true;
let number = if condition {
    5       // 整数
} else {
    "six"   // 字符串
}; // 编译错误：`if` and `else` have incompatible types
```

因为 Rust 是静态类型语言，变量 `number` 的类型必须在编译时确定，所以两个分支必须返回相同类型的值。
