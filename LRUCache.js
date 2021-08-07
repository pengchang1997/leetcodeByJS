// Leetcode 146

// LRU缓存机制

// 双向链表节点定义
var doubleLinkedListNode = function (key, value) {
    this.key = key;
    this.value = value;
    this.previous = null;
    this.next = null;
}

// 双向链表
var doubleLinkedList = function () {
    this.dummyHead = new doubleLinkedListNode(-1, -1);
    this.dummyTail = new doubleLinkedListNode(-1, -1);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.previous = this.dummyHead;
}

// 将一个节点添加到链表头部
doubleLinkedList.prototype.addToHead = function (node) {
    let next = this.dummyHead.next;
    this.dummyHead.next = node;
    node.previous = this.dummyHead;
    node.next = next;
    next.previous = node;
}

// 将一个节点从链表中移除
doubleLinkedList.prototype.removeNode = function (node) {
    let previous = node.previous, next = node.next;
    previous.next = next;
    next.previous = previous;
    return node;
}

// 移除链表尾部的节点
doubleLinkedList.prototype.removeNodeFromTail = function () {
    let node = this.dummyTail.previous;
    let previous = node.previous, next = node.next;
    previous.next = next;
    next.previous = previous;
    return node;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.map = new Map();
    this.list = new doubleLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.get(key) === undefined) {
        return -1;
    }

    let node = this.map.get(key);
    this.list.removeNode(node);
    this.list.addToHead(node);
    return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.get(key) !== undefined) {
        let node = this.map.get(key);
        this.list.removeNode(node);
        this.list.addToHead(node);
        node.value = value;
    } else {
        if (this.size === this.capacity) {
            // 若容量已满，则移除尾部的节点
            let node = this.list.removeNodeFromTail();

            // 从哈希表中删除对应的映射关系
            this.map.delete(node.key);

            let newNode = new doubleLinkedListNode(key, value);
            this.list.addToHead(newNode);
            this.map.set(key, newNode);
        } else {
            let newNode = new doubleLinkedListNode(key, value);
            this.list.addToHead(newNode);
            this.map.set(key, newNode);
            this.size++;
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */