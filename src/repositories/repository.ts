export abstract class Repository {
    protected collection: Array<any> = [];

    public getCollection(): Array<any> {
        return this.collection;
    }

    /**
     * 
     * @returns Number of items in the collection
     */
    public getSize(): number {
        // Your logic here !!!
        return this.collection.length;
    }

    /**
     * @returns first item in the collection
     */
    public findFirst(): any {
        if (this.getSize() > 0) {
            return this.collection[0];
        }

        return null;
    }

    /**
     * @returns Last item in the collection
     */
    public findLast(): any {
        if (this.getSize()) {
            return this.collection[this.getSize() - 1];
        }
        return null;
    }

    /**
     * 
     * @param index Index of an item in the collection
     * @returns The item at the index position
     */
    public find(index: number): any {
        if (this.getSize()) {
            if (index < this.getSize()) {
                return this.collection[index];
            }
        }
        return null;
    }

    /**
     * @param item Item to add to the collection
     */
    public add(item: any): void {
        this.collection.push(item);
    }

    /**
     * Remove an item from the collection
     * @param item Item to remove if exists
     * @see splice() method of array Object
     * @see indexOf() method of array Object
     */
    public remove(item: any): void {
        if (this.hasElements()) {
            if (this.collection.includes(item)) {
                this.collection.splice(
                    this.collection.indexOf(item),
                    1
                )
            }
        }
    }

    private hasElements(): boolean {
        return this.getSize() ? true : false;
    }
}