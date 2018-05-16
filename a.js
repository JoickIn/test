    /**
     * 冒泡排序,从大到小或者从小到大的排序 -> 【功能】
     * @param array ------------------------->【参数】
     * @returns {*|Array} ------------------->【返回值】
     */
    function sort(array) {
        //过滤掉那五种不规则的东西,如果传过来的是那五种的任意一种,那么返回空数组。
        array = array || [];
        //(1):外层循环
        for (var i = 0; i < array.length - 1; i++) {
            //假设排序完毕
            var isSort = true;
            //(2):内层循环
            for (var j = 0; j < array.length - 1 - i; j++) {
                //(3):判断大小决定是否交换位置
                if (array[j] > array[j + 1]) {
                    //如果交换位置说明没有排序 ok。
                    isSort = false;
                    var tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                }
            }
            //(4):判断是否已经排序完成。
            if (isSort) {
                break;
            }
        }
        //(5):返回值是？数组
        return  array;
    }
    var array = [1, 213, 432, 5, 6, 87, 44, 43, 6, 9, 0, 32];
    console.log(sort(array));