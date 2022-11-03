export interface Comparable<T> {
    /**
     * 
     * @param t any T type to compare
     * @returns negative value if object is smaller than comparable object
     *  0 value it both are same
     *  positive value if object is bigger than comparable object
     * @usage object.compare(object1)
     */
    compare(t: T): number;
}