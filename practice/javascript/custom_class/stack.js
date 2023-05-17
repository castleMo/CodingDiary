class Stack {
	constructor(items) {
		this.index = 0;
		this.storage = {};
		if (items) {
			const { storage, index } = items.reduce(
				(obj, curVal) => {
					obj.storage[++obj.index] = curVal;
					return obj;
				},
				{ storage: {}, index: 0 },
			);
			this.storage = storage;
			this.index = index;
		}
	}

	push = (item) => {
		this.storage[++this.index] = item;
	};

	pop = () => {
		// 스택에 데이터가 없는 경우
		if (this.index === 0) {
			return undefined;
		}

		return this.storage[this.index--];
	};

	top = () => {
		return this.storage[this.index];
	};

	size = () => {
		return this.index;
	};

	empty = () => {
		return this.index === 0;
	};
}
