<template>
    <div>
        这是{{$route.params.id}}号教师的详情信息
    </div>
</template>
<script>
export default {
    validate(data){
        // console.log(data);//这里有传递的参数信息
        
        // return false//必须要返回一个布尔值
        return /^\d+$/.test(data.params.id)
        //这个代表参数里面的值是否满足正则条件,满足返回true,不满足就是false(“^\d+$”表示整数，即数字开头，数字结尾，至少要有一位数字。)

    }
}
</script>