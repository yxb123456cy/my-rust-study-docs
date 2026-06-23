# Rust中的 while 循环

当你需要在每次循环迭代前检查一个条件时，`while` 循环是最佳选择。

当条件为 `true` 时，执行循环体；当条件变为 `false` 时，跳出循环。这种模式可以结合 `loop`、`if`、`else` 和 `break` 来实现，但 `while` 提供了更简洁的内置语法。

## 基本的 while 循环

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{}!", number);
        number -= 1; // 每次循环 number 减 1
    }

    println!("发射！");
}
```

上面的代码在 `number` 不等于 0 时不断循环，每次循环将 `number` 减 1。当 `number` 变为 0 时，条件 `number != 0` 为 `false`，循环结束。

## 使用 while 遍历集合 (不推荐)

虽然你可以使用 `while` 循环结合索引来遍历数组等集合，但这种做法容易出错且效率较低。

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];
    let mut index = 0;

    while index < 5 { // 需要手动管理索引和边界
        println!("当前的值是: {}", a[index]);
        index += 1;
    }
}
```

这种做法有几个缺点：
1. **容易发生越界 panic**：如果将数组长度改为 4，但忘记修改 `index < 5` 的条件，程序在运行时就会崩溃（Panic）。
2. **性能损耗**：由于 Rust 保证内存安全，编译器会增加运行时的边界检查代码，确保每次 `a[index]` 的访问都在合法范围内。这种额外的检查会拖慢执行速度。

为了更安全、更高效地遍历集合，Rust 推荐使用 **`for` 循环**。
