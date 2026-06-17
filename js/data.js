'use strict';

const BOOK_DATA = {
  chapters: [
    {
      id: 1,
      title: "Getting Started",
      file: "ch01-00-getting-started",
      icon: "rocket-takeoff",
      tagline: "Install Rust and write your first programs.",
      description: "Everything you need to get your Rust environment up and running. Install Rust via rustup, write the classic Hello, World!, and get familiar with Cargo — Rust's indispensable build tool and package manager.",
      sections: [
        {
          title: "Installation",
          file: "ch01-01-installation",
          description: "Install Rust on Linux, macOS, or Windows using rustup, the official toolchain manager that handles Rust versions and associated tools."
        },
        {
          title: "Hello, World!",
          file: "ch01-02-hello-world",
          description: "Write and run your very first Rust program — the classic Hello, World! — and understand the basic anatomy of a Rust source file."
        },
        {
          title: "Hello, Cargo!",
          file: "ch01-03-hello-cargo",
          description: "Learn Cargo, Rust's powerful build system and package manager, to create projects, manage dependencies, build, and run your code."
        }
      ]
    },
    {
      id: 2,
      title: "Programming a Guessing Game",
      file: "ch02-00-guessing-game-tutorial",
      icon: "joystick",
      tagline: "Build your first real program hands-on.",
      description: "Jump straight into Rust by building a complete, working number-guessing game. You'll encounter variables, user input, random numbers, loops, and conditionals — all in one practical project.",
      sections: [
        {
          title: "Programming a Guessing Game",
          file: "ch02-00-guessing-game-tutorial",
          description: "Build a number-guessing game step by step, encountering core Rust concepts: variables, input/output, random numbers, loop, and match."
        }
      ]
    },
    {
      id: 3,
      title: "Common Programming Concepts",
      file: "ch03-00-common-programming-concepts",
      icon: "code-slash",
      tagline: "Master variables, types, functions, and control flow.",
      description: "Cover the foundational building blocks shared across most programming languages — but with Rust's unique twist. Learn how Rust's type system, scoping rules, and expression-based syntax set it apart.",
      sections: [
        {
          title: "Variables and Mutability",
          file: "ch03-01-variables-and-mutability",
          description: "Understand Rust's strict distinction between mutable and immutable variables, and how constants and shadowing work."
        },
        {
          title: "Data Types",
          file: "ch03-02-data-types",
          description: "Explore Rust's scalar types (integers, floats, booleans, chars) and compound types (tuples and arrays), and how the type system prevents bugs."
        },
        {
          title: "Functions",
          file: "ch03-03-how-functions-work",
          description: "Define functions, pass parameters, and return values in Rust — and understand how expressions differ from statements."
        },
        {
          title: "Comments",
          file: "ch03-04-comments",
          description: "Write clear, helpful comments in your Rust code using line comments and documentation comments."
        },
        {
          title: "Control Flow",
          file: "ch03-05-control-flow",
          description: "Control program execution with if/else expressions, loop, while, and for — Rust's expressive and exhaustive control flow constructs."
        }
      ]
    },
    {
      id: 4,
      title: "Understanding Ownership",
      file: "ch04-00-understanding-ownership",
      icon: "shield-check",
      tagline: "Rust's killer feature — memory safety without GC.",
      description: "Ownership is what makes Rust unique. It's a set of rules enforced at compile time that eliminate entire classes of memory bugs — with no garbage collector needed. Mastering ownership unlocks everything else in Rust.",
      sections: [
        {
          title: "What is Ownership?",
          file: "ch04-01-what-is-ownership",
          description: "Learn the three rules of ownership, how the stack and heap work in Rust, and what happens when a value goes out of scope."
        },
        {
          title: "References and Borrowing",
          file: "ch04-02-references-and-borrowing",
          description: "Borrow values instead of taking ownership using references, and understand the borrow checker's rules for safe memory access."
        },
        {
          title: "The Slice Type",
          file: "ch04-03-slices",
          description: "Work with slices — references to contiguous sequences of elements — without taking ownership of the underlying collection."
        }
      ]
    },
    {
      id: 5,
      title: "Using Structs to Structure Related Data",
      file: "ch05-00-structs",
      icon: "box-seam",
      tagline: "Group related data into meaningful custom types.",
      description: "Structs let you bundle multiple related values under one meaningful name, similar to objects in other languages — but with Rust's ownership semantics baked in. Add methods to make your structs fully featured.",
      sections: [
        {
          title: "Defining and Instantiating Structs",
          file: "ch05-01-defining-structs",
          description: "Define struct types with named fields, create instances, access field values, and use shorthand initialization and struct update syntax."
        },
        {
          title: "An Example Program Using Structs",
          file: "ch05-02-example-structs",
          description: "See structs in action through a practical example that calculates the area of a rectangle, refactored step by step."
        },
        {
          title: "Methods",
          file: "ch05-03-method-syntax",
          description: "Add behavior to your structs with methods defined inside impl blocks, and learn about associated functions like constructor patterns."
        }
      ]
    },
    {
      id: 6,
      title: "Enums and Pattern Matching",
      file: "ch06-00-enums",
      icon: "diagram-3",
      tagline: "Define types that can be one of many variants.",
      description: "Enums in Rust are far more powerful than in most languages — each variant can carry its own data. Pair them with match for exhaustive, expressive control flow that the compiler verifies for you.",
      sections: [
        {
          title: "Defining an Enum",
          file: "ch06-01-defining-an-enum",
          description: "Create enum types where each variant can optionally hold different data, and explore the built-in Option<T> enum for nullable values."
        },
        {
          title: "The match Control Flow Construct",
          file: "ch06-02-match",
          description: "Use match to exhaustively handle all enum variants, binding their data and running different code for each case."
        },
        {
          title: "Concise Control Flow with if let",
          file: "ch06-03-if-let",
          description: "Use if let and let...else for concise single-pattern matching when you only care about one specific variant."
        }
      ]
    },
    {
      id: 7,
      title: "Packages, Crates, and Modules",
      file: "ch07-00-managing-growing-projects-with-packages-crates-and-modules",
      icon: "boxes",
      tagline: "Organize your code as your project grows.",
      description: "As Rust programs grow, you need a way to organize code, control what's public or private, and split across multiple files. The module system gives you all of this with clean, predictable rules.",
      sections: [
        {
          title: "Packages and Crates",
          file: "ch07-01-packages-and-crates",
          description: "Understand Rust's top-level organizational units: packages (collections of crates) and crates (the fundamental compilation unit)."
        },
        {
          title: "Control Scope and Privacy with Modules",
          file: "ch07-02-defining-modules-to-control-scope-and-privacy",
          description: "Use modules to organize code into logical groups and control what is publicly accessible versus private to the module."
        },
        {
          title: "Paths for Referring to an Item in the Module Tree",
          file: "ch07-03-paths-for-referring-to-an-item-in-the-module-tree",
          description: "Navigate the module tree using absolute paths (from the crate root) and relative paths (from the current module)."
        },
        {
          title: "Bringing Paths Into Scope with the use Keyword",
          file: "ch07-04-bringing-paths-into-scope-with-the-use-keyword",
          description: "Simplify code by using the use keyword to bring long paths into local scope, and re-export items with pub use."
        },
        {
          title: "Separating Modules into Different Files",
          file: "ch07-05-separating-modules-into-different-files",
          description: "Split large modules across multiple files to improve organization and maintainability as your codebase expands."
        }
      ]
    },
    {
      id: 8,
      title: "Common Collections",
      file: "ch08-00-common-collections",
      icon: "collection",
      tagline: "Store and manage groups of values efficiently.",
      description: "Rust's standard library includes essential collection types that store data on the heap: vectors for ordered lists, strings for UTF-8 text, and hash maps for key-value lookups. These are your everyday workhorses.",
      sections: [
        {
          title: "Storing Lists of Values with Vectors",
          file: "ch08-01-vectors",
          description: "Use Vec<T> to store a dynamic, ordered list of same-typed values, with methods to add, remove, iterate, and access elements."
        },
        {
          title: "Storing UTF-8 Encoded Text with Strings",
          file: "ch08-02-strings",
          description: "Work with Rust's String type for owned text and &str for string slices, understanding UTF-8 encoding and common string operations."
        },
        {
          title: "Storing Keys with Associated Values in Hash Maps",
          file: "ch08-03-hash-maps",
          description: "Use HashMap<K, V> to associate keys with values for average O(1) lookups, insertions, and conditional updates."
        }
      ]
    },
    {
      id: 9,
      title: "Error Handling",
      file: "ch09-00-error-handling",
      icon: "exclamation-triangle",
      tagline: "Handle failures gracefully and robustly.",
      description: "Rust makes you think about errors at compile time. It distinguishes unrecoverable panics from recoverable Results, giving you the tools to write programs that communicate failures clearly and degrade gracefully.",
      sections: [
        {
          title: "Unrecoverable Errors with panic!",
          file: "ch09-01-unrecoverable-errors-with-panic",
          description: "Use panic! for bugs and unrecoverable states, understand stack unwinding versus aborting, and read backtraces."
        },
        {
          title: "Recoverable Errors with Result",
          file: "ch09-02-recoverable-errors-with-result",
          description: "Use the Result<T, E> type to handle errors that can be recovered from, with the ? operator for concise error propagation."
        },
        {
          title: "To panic! or Not to panic!",
          file: "ch09-03-to-panic-or-not-to-panic",
          description: "Learn the guidelines for choosing between panic! and Result, and how to design APIs with the right error-handling strategy."
        }
      ]
    },
    {
      id: 10,
      title: "Generic Types, Traits, and Lifetimes",
      file: "ch10-00-generics",
      icon: "infinity",
      tagline: "Write flexible, reusable code with zero overhead.",
      description: "Generics eliminate code duplication, traits define shared behavior like interfaces, and lifetimes ensure references are always valid. Together they form the foundation of Rust's expressive and safe type system.",
      sections: [
        {
          title: "Generic Data Types",
          file: "ch10-01-syntax",
          description: "Write functions, structs, enums, and impl blocks that work with any type using generic type parameters like <T>."
        },
        {
          title: "Defining Shared Behavior with Traits",
          file: "ch10-02-traits",
          description: "Define trait interfaces that types can implement to share behavior, and use trait bounds to constrain what types generics can accept."
        },
        {
          title: "Validating References with Lifetimes",
          file: "ch10-03-lifetime-syntax",
          description: "Annotate lifetimes to tell the borrow checker how long references must be valid, preventing dangling references at compile time."
        }
      ]
    },
    {
      id: 11,
      title: "Writing Automated Tests",
      file: "ch11-00-testing",
      icon: "clipboard-check",
      tagline: "Verify your code works correctly — every time.",
      description: "Rust has first-class support for automated testing built right into Cargo. Write unit tests, integration tests, and documentation tests to ensure your code is correct and stays that way as it evolves.",
      sections: [
        {
          title: "How to Write Tests",
          file: "ch11-01-writing-tests",
          description: "Write test functions with #[test], use assertion macros like assert_eq!, and test for expected panics with #[should_panic]."
        },
        {
          title: "Controlling How Tests Are Run",
          file: "ch11-02-running-tests",
          description: "Use cargo test flags to filter tests by name, run ignored tests, control thread count, and show or capture output."
        },
        {
          title: "Test Organization",
          file: "ch11-03-test-organization",
          description: "Organize tests into unit tests (same file, test private functions) and integration tests (separate tests/ directory)."
        }
      ]
    },
    {
      id: 12,
      title: "An I/O Project: Building a Command Line Program",
      file: "ch12-00-an-io-project",
      icon: "terminal",
      tagline: "Build minigrep — a real-world CLI tool.",
      description: "Apply everything you've learned to build minigrep — a simplified version of the classic grep command-line tool. You'll practice modularity, error handling, testing, file I/O, and environment variables.",
      sections: [
        {
          title: "Accepting Command Line Arguments",
          file: "ch12-01-accepting-command-line-arguments",
          description: "Read arguments passed to your program at runtime using std::env::args and collect them into a usable form."
        },
        {
          title: "Reading a File",
          file: "ch12-02-reading-a-file",
          description: "Open a file by path and read its entire contents into a String using Rust's file I/O standard library."
        },
        {
          title: "Refactoring to Improve Modularity",
          file: "ch12-03-improving-error-handling-and-modularity",
          description: "Restructure the program to separate configuration, logic, and error handling into a library crate for better maintainability."
        },
        {
          title: "Adding Functionality with TDD",
          file: "ch12-04-testing-the-librarys-functionality",
          description: "Use Test-Driven Development to add case-sensitive and case-insensitive search functionality to minigrep."
        },
        {
          title: "Working with Environment Variables",
          file: "ch12-05-working-with-environment-variables",
          description: "Read environment variables at runtime using std::env::var to allow runtime configuration without changing arguments."
        },
        {
          title: "Redirecting Errors to Standard Error",
          file: "ch12-06-writing-to-stderr-instead-of-stdout",
          description: "Write error output to stderr with eprintln! and normal output to stdout, following Unix program conventions."
        }
      ]
    },
    {
      id: 13,
      title: "Functional Language Features: Iterators and Closures",
      file: "ch13-00-functional-features",
      icon: "arrow-repeat",
      tagline: "Write concise, expressive code with closures and iterators.",
      description: "Rust borrows powerful ideas from functional programming. Closures capture their environment, and iterators process sequences lazily and efficiently — often more clearly and as fast as hand-written loops.",
      sections: [
        {
          title: "Closures",
          file: "ch13-01-closures",
          description: "Create anonymous functions that capture values from their surrounding scope, and use them with higher-order functions."
        },
        {
          title: "Processing a Series of Items with Iterators",
          file: "ch13-02-iterators",
          description: "Use lazy iterators to process sequences, chaining adapters like map, filter, and collect for expressive data transformations."
        },
        {
          title: "Improving Our I/O Project",
          file: "ch13-03-improving-our-io-project",
          description: "Refactor minigrep to use closures and iterators instead of explicit loops for cleaner and more idiomatic Rust code."
        },
        {
          title: "Performance in Loops vs. Iterators",
          file: "ch13-04-performance",
          description: "Understand why iterators are zero-cost abstractions — they compile to the same or better assembly as hand-written loops."
        }
      ]
    },
    {
      id: 14,
      title: "More about Cargo and Crates.io",
      file: "ch14-00-more-about-cargo",
      icon: "box-arrow-up-right",
      tagline: "Level up your Cargo skills and share your work.",
      description: "Cargo does more than build and test. Learn release profiles, writing documentation, workspaces for multi-package projects, installing binary tools, and publishing your own crates to Crates.io.",
      sections: [
        {
          title: "Customizing Builds with Release Profiles",
          file: "ch14-01-release-profiles",
          description: "Configure compilation settings per profile — fast debug builds versus optimized release builds — using Cargo.toml."
        },
        {
          title: "Publishing a Crate to Crates.io",
          file: "ch14-02-publishing-to-crates-io",
          description: "Write documentation comments, generate docs with rustdoc, and publish your library crate to Crates.io for others to use."
        },
        {
          title: "Cargo Workspaces",
          file: "ch14-03-cargo-workspaces",
          description: "Manage multiple related packages together in a Cargo workspace, sharing a single dependency lock file and output directory."
        },
        {
          title: "Installing Binaries with cargo install",
          file: "ch14-04-installing-binaries",
          description: "Install binary crates published to Crates.io as local command-line tools using cargo install."
        },
        {
          title: "Extending Cargo with Custom Commands",
          file: "ch14-05-extending-cargo",
          description: "Add new subcommands to Cargo by placing cargo-* executables in your PATH to extend Cargo's built-in functionality."
        }
      ]
    },
    {
      id: 15,
      title: "Smart Pointers",
      file: "ch15-00-smart-pointers",
      icon: "cpu",
      tagline: "Go beyond references with heap allocation and shared ownership.",
      description: "Smart pointers are data structures that act like references but with additional capabilities. Rust's standard library includes Box, Rc, and RefCell — each solving a different memory management problem elegantly.",
      sections: [
        {
          title: "Using Box<T> to Point to Data on the Heap",
          file: "ch15-01-box",
          description: "Allocate values on the heap with Box<T>, enable recursive types, and understand when heap allocation is appropriate."
        },
        {
          title: "Treating Smart Pointers Like Regular References",
          file: "ch15-02-deref",
          description: "Implement the Deref trait so your type supports the * dereference operator, enabling transparent deref coercions."
        },
        {
          title: "Running Code on Cleanup with the Drop Trait",
          file: "ch15-03-drop",
          description: "Customize what happens when a value goes out of scope by implementing the Drop trait — Rust's approach to destructors."
        },
        {
          title: "Rc<T>, the Reference Counted Smart Pointer",
          file: "ch15-04-rc",
          description: "Share ownership of data across multiple parts of your program using Rc<T> for single-threaded reference counting."
        },
        {
          title: "RefCell<T> and the Interior Mutability Pattern",
          file: "ch15-05-interior-mutability",
          description: "Mutate data through shared references at runtime using RefCell<T>, shifting borrow checks from compile time to runtime."
        },
        {
          title: "Reference Cycles Can Leak Memory",
          file: "ch15-06-reference-cycles",
          description: "Understand how circular Rc<T> references can leak memory, and prevent them using Weak<T> references."
        }
      ]
    },
    {
      id: 16,
      title: "Fearless Concurrency",
      file: "ch16-00-concurrency",
      icon: "lightning-fill",
      tagline: "Write safe concurrent code — the compiler enforces it.",
      description: "Concurrency bugs like data races are caught at compile time in Rust, not at runtime. Use threads, channels, and shared state safely, with the type system preventing entire categories of concurrency mistakes.",
      sections: [
        {
          title: "Using Threads to Run Code Simultaneously",
          file: "ch16-01-threads",
          description: "Spawn OS threads to run code in parallel, pass closures, and use join handles to wait for threads to complete."
        },
        {
          title: "Transfer Data Between Threads with Message Passing",
          file: "ch16-02-message-passing",
          description: "Use channels (sender/receiver pairs) to communicate between threads, safely transferring ownership of data across thread boundaries."
        },
        {
          title: "Shared-State Concurrency",
          file: "ch16-03-shared-state",
          description: "Share data between threads safely using Mutex<T> for mutual exclusion and Arc<T> for thread-safe reference counting."
        },
        {
          title: "Extensible Concurrency with Send and Sync",
          file: "ch16-04-extensible-concurrency-sync-and-send",
          description: "Understand the Send and Sync marker traits that underpin Rust's thread-safety guarantees and allow you to extend them to your own types."
        }
      ]
    },
    {
      id: 17,
      title: "Fundamentals of Asynchronous Programming",
      file: "ch17-00-async-await",
      icon: "broadcast",
      tagline: "Write non-blocking concurrent code with async/await.",
      description: "Async programming lets you handle many concurrent tasks efficiently without spawning a thread per task. Rust's async/await syntax builds on futures — values representing work that will complete later.",
      sections: [
        {
          title: "Futures and the Async Syntax",
          file: "ch17-01-futures-and-syntax",
          description: "Learn what futures are, how async functions return them, and how the await keyword suspends execution until a future completes."
        },
        {
          title: "Applying Concurrency with Async",
          file: "ch17-02-concurrency-with-async",
          description: "Run multiple async tasks concurrently on a single thread using join! and select! to coordinate work without OS threads."
        },
        {
          title: "Working With Any Number of Futures",
          file: "ch17-03-more-futures",
          description: "Combine an arbitrary number of futures dynamically using collections and combinators to coordinate large amounts of async work."
        },
        {
          title: "Streams: Futures in Sequence",
          file: "ch17-04-streams",
          description: "Process sequences of values produced asynchronously over time using streams — the async equivalent of iterators."
        },
        {
          title: "A Closer Look at the Traits for Async",
          file: "ch17-05-traits-for-async",
          description: "Explore the Future, Stream, Pin, and Unpin traits that form the foundation of Rust's async machinery."
        },
        {
          title: "Futures, Tasks, and Threads",
          file: "ch17-06-futures-tasks-threads",
          description: "Understand how async tasks, futures, and OS threads relate to each other, and when to reach for each tool."
        }
      ]
    },
    {
      id: 18,
      title: "Object Oriented Programming Features",
      file: "ch18-00-oop",
      icon: "bezier2",
      tagline: "See how Rust approaches OOP — on its own terms.",
      description: "Rust isn't a traditional OOP language, but it supports many OOP patterns. Explore encapsulation, inheritance-like behavior via traits, and runtime polymorphism using trait objects.",
      sections: [
        {
          title: "Characteristics of Object-Oriented Languages",
          file: "ch18-01-what-is-oo",
          description: "Compare Rust's design to classical OOP features like encapsulation, inheritance, and polymorphism to see where they overlap."
        },
        {
          title: "Using Trait Objects to Abstract over Shared Behavior",
          file: "ch18-02-trait-objects",
          description: "Achieve runtime polymorphism with trait objects (dyn Trait), trading compile-time monomorphization for flexible dynamic dispatch."
        },
        {
          title: "Implementing an Object-Oriented Design Pattern",
          file: "ch18-03-oo-design-patterns",
          description: "Implement the classic State design pattern in Rust, both the OOP way and the idiomatic Rust encoding using types."
        }
      ]
    },
    {
      id: 19,
      title: "Patterns and Matching",
      file: "ch19-00-patterns",
      icon: "grid-3x3",
      tagline: "Master Rust's most expressive feature.",
      description: "Patterns are a special syntax for matching against the structure of types. From simple variable bindings to complex destructuring, patterns appear everywhere in Rust and make code remarkably expressive.",
      sections: [
        {
          title: "All the Places Patterns Can Be Used",
          file: "ch19-01-all-the-places-for-patterns",
          description: "Discover every place patterns appear in Rust — match arms, if let, while let, for loops, let statements, and function parameters."
        },
        {
          title: "Refutability: Whether a Pattern Might Fail to Match",
          file: "ch19-02-refutability",
          description: "Understand the difference between irrefutable patterns (always match) and refutable patterns (can fail), and where each is allowed."
        },
        {
          title: "Pattern Syntax",
          file: "ch19-03-pattern-syntax",
          description: "Master the full power of Rust pattern syntax: literals, variables, wildcards, ranges, destructuring, bindings, and guards."
        }
      ]
    },
    {
      id: 20,
      title: "Advanced Features",
      file: "ch20-00-advanced-features",
      icon: "award-fill",
      tagline: "Unlock Rust's most powerful capabilities.",
      description: "This chapter covers Rust features used in real libraries and systems code: unsafe for low-level control, advanced trait techniques, type system tricks, and macros for metaprogramming.",
      sections: [
        {
          title: "Unsafe Rust",
          file: "ch20-01-unsafe-rust",
          description: "Use unsafe blocks to perform operations the compiler can't verify — raw pointers, FFI, mutable statics, and custom allocators."
        },
        {
          title: "Advanced Traits",
          file: "ch20-02-advanced-traits",
          description: "Explore associated types, default type parameters, operator overloading, fully qualified syntax, and supertraits."
        },
        {
          title: "Advanced Types",
          file: "ch20-03-advanced-types",
          description: "Use the newtype pattern, type aliases, the never type (!), and dynamically sized types for advanced type system techniques."
        },
        {
          title: "Advanced Functions and Closures",
          file: "ch20-04-advanced-functions-and-closures",
          description: "Pass functions as values using function pointers (fn), and return closures from functions for higher-order programming patterns."
        },
        {
          title: "Macros",
          file: "ch20-05-macros",
          description: "Write macros for metaprogramming — declarative macros with macro_rules! and the three kinds of procedural macros."
        }
      ]
    },
    {
      id: 21,
      title: "Final Project: Building a Multithreaded Web Server",
      file: "ch21-00-final-project-a-web-server",
      icon: "globe",
      tagline: "Put it all together in one ambitious project.",
      description: "Apply everything you've learned by building a complete HTTP web server that serves files and handles multiple concurrent connections. You'll implement a thread pool from scratch and add graceful shutdown.",
      sections: [
        {
          title: "Building a Single-Threaded Web Server",
          file: "ch21-01-single-threaded",
          description: "Create a TCP listener that parses HTTP requests and serves HTML responses — one connection at a time to start."
        },
        {
          title: "From Single-Threaded to Multithreaded Server",
          file: "ch21-02-multithreaded",
          description: "Build a thread pool from scratch and use it to handle multiple connections concurrently, dramatically improving throughput."
        },
        {
          title: "Graceful Shutdown and Cleanup",
          file: "ch21-03-graceful-shutdown-and-cleanup",
          description: "Implement graceful shutdown so in-progress requests can finish before the server stops, using the Drop trait and channels."
        }
      ]
    },
    {
      id: 22,
      title: "Appendix",
      file: "appendix-00",
      icon: "book-fill",
      tagline: "Reference materials for keywords, operators, and tools.",
      description: "A collection of reference materials for quick lookups: all Rust keywords, a complete operator/symbol reference, derivable traits, useful development tools, the edition system, and more.",
      sections: [
        {
          title: "A — Keywords",
          file: "appendix-01-keywords",
          description: "A complete reference of all reserved and used keywords in the Rust language, with brief descriptions of each."
        },
        {
          title: "B — Operators and Symbols",
          file: "appendix-02-operators",
          description: "A comprehensive reference for all operators, symbols, and punctuation used in Rust syntax and what they mean."
        },
        {
          title: "C — Derivable Traits",
          file: "appendix-03-derivable-traits",
          description: "All traits that can be automatically implemented using the #[derive] attribute, and what behavior each one adds."
        },
        {
          title: "D — Useful Development Tools",
          file: "appendix-04-useful-development-tools",
          description: "Tools that make Rust development productive: rustfmt for formatting, Clippy for linting, rust-analyzer for IDE support, and more."
        },
        {
          title: "E — Editions",
          file: "appendix-05-editions",
          description: "Rust's edition system explained — how editions allow language evolution without breaking existing code."
        },
        {
          title: "F — Translations of the Book",
          file: "appendix-06-translation",
          description: "Links to community-maintained translations of The Rust Programming Language into other languages."
        },
        {
          title: "G — How Rust is Made and 'Nightly Rust'",
          file: "appendix-07-nightly-rust",
          description: "Learn about Rust's release channels (stable, beta, nightly) and how the Rust project develops and ships new features."
        }
      ]
    }
  ]
};

// Flat ordered list of all materials for prev/next navigation
const ALL_MATERIALS = [];
BOOK_DATA.chapters.forEach(chapter => {
  chapter.sections.forEach(section => {
    ALL_MATERIALS.push({
      file: section.file,
      title: section.title,
      chapterId: chapter.id,
      chapterTitle: chapter.title
    });
  });
});

// Map any file slug → its parent chapter
const FILE_TO_CHAPTER = {};
BOOK_DATA.chapters.forEach(chapter => {
  FILE_TO_CHAPTER[chapter.file] = chapter;
  chapter.sections.forEach(section => {
    FILE_TO_CHAPTER[section.file] = chapter;
  });
});
