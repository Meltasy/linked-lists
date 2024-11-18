# linked-lists

An odin project on linked lists

NB: Files ending in js use factories, and those ending in mjs use classes

The following classes / factories and methods have been included:

* **LinkedList** class / factory to represent the full list
* **Node** class / factory to represent the nodes containing values
* **append(value)** to add new node to end of list
* **prepend(value)** to add new node to start of list
* **size** to return total number of nodes in list
* **head** to return first node in list
* **tail** to return last node in list
* **at(index)** to return node at given index
* **pop** to remove last element from list
* **contains(value)** to return true if passed in value is in list, or if not, false
* **find(value)** to return index of node containing value, or null if no node
* **toString** to represent LinkedList objects as strings, using the format: ( value ) -> ( value ) -> ( value ) -> null
* **insertAt(value, index)** to insert new node with provided value at given index
* **removeAt(index)** to remove node at given index
