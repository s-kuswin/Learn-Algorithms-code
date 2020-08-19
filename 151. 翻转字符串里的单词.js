	/**
	 * @param {string} s
	 * @return {string}
     * 不用API,内存消耗41.6m
	 */
	var reverseWords = function(s) {
		s += ' '
		let list = []
		let str = ''
		let word = ' '
		let length = s.length
		let reversal = ''
		for(var i=0;i<length;i++) {
			s[i] !== word ? str += s[i] : (str && list.push(str),str = '')
		}
		console.log(list.length);
		for(var j = list.length - 1;j>=0;j--) {
			reversal  += j !== 0 ? list[j] +' ' : list[j]
		}
		return reversal
	};

    reverseWords('the sky is blue')
    
    //使用api,内存消耗38.2m
	var reverseWords = function(s) {
		return s.split(' ').filter(item => item != '').reverse().join(' ')
	};
	reverseWords('the sky is blue')