<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product,i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      productList: [
        {"product_name":"기계식키보드", "price":25000, "category":"노트북/태블릿", "delivery_price":5000},
        {"product_name":"무선마우스", "price":10000, "category":"노트북/태블릿", "delivery_price":5000},
        {"product_name":"아이패드", "price":430000, "category":"노트북/태블릿", "delivery_price":5000},
        {"product_name":"태블릿거치대", "price":20000, "category":"노트북/태블릿", "delivery_price":5000},
        {"product_name":"무선충전기", "price":30000, "category":"노트북/태블릿", "delivery_price":5000}
      ]
    }
  }
}
</script>

<style scoped>
  table{
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td,th{
    border: 1px solid black;
    text-align: left;
    padding: 8px;
  }
</style>
<!-- 배열데이터는 v-for 디렉티브를 이용해서 바인딩 할 수 있다. 반복적으로 랜더링할 html 태그에 v-for 디랙티브를 사용하면 배열에 있는 데이터 수 만큼 html 태그를 반복적으로 랜더링 한다 -->