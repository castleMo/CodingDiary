package main

import "fmt"

func main() {
	s := make([]string, 3)
	fmt.Println("emp:", s) // []

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	fmt.Println("s:", s)        // [a, b, c]
	fmt.Println("s[2]:", s[2])  // c
	fmt.Println("len:", len(s)) // 3

	s = append(s, "d")
	s = append(s, "e", "f")
	fmt.Println("apd:", s) // [a, b, c, d, e, f]

	c := make([]string, len(s))
	copy(c, s)
	fmt.Println("cpy:", c) // [a, b, c, d, e, f]

	l := s[2:5]
	fmt.Println("sl1:", l) // [c, d, e]

	l = s[:5]
	fmt.Println("sl2:", l) // [a, b, c, d, e]

	l = s[2:]
	fmt.Println("sl3:", l) // [c, d, e, f]

	t := []string{"g", "h", "i"}
	fmt.Println("dcl:", t) // [g, h, i]

	twoD := make([][]int, 3)
	for i := 0; i < 3; i++ {
		innerLen := i + 1
		twoD[i] = make([]int, innerLen)
		for j := 0; j < innerLen; j++ {
			twoD[i][j] = i + j
		}
	}
	fmt.Println("2d: ", twoD) // [[0], [1, 2], [2, 3, 4]]
}
