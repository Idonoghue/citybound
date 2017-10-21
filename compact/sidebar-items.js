initSidebarItems({"struct":[["CDict","A simple linear-search key-value dictionary, implemented using two `CompactVec`'s, one for keys, one for values."],["CHashMap","A dynamically-sized open adressing quadratic probing hashmap that can be stored in compact sequential storage and automatically spills over into free heap storage using `Allocator`."],["COption","A wrapper to make an `Option` of a nontrivial `Compact` possible. Unfortunately, we can't blanket-`impl` that, since that overlaps (for the compiler) with the `impl` for trivial `Copy` types..."],["CVec","A dynamically-sized vector that can be stored in compact sequential storage and automatically spills over into free heap storage using `Allocator`. Tries to closely follow the API of `std::vec::Vec`, but is not complete."]],"trait":[["Compact","A trait for objects with a statically-sized part and a potential dynamically-sized part that can be stored both compactly in consecutive memory or freely on the heap"]]});