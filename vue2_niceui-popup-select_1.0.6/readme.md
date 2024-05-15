### 创作不易，请给五星评论
### 有疑问或定制 +q:408757217,备注uniapp.

### 使用说明
# ！！！注意：本插件要搭配 uni-icons、uni-popup、uni-scss使用
### Popup-Select Props
|  属性名   | 类型 |  默认值   | 说明 |
|  ----  | ----  |  ----  | ----  |
| columns  | String |  -  | 数据项  |
| selectValue  | Number |  -  | 选中的值  |
| option  | String |   { label: 'label', value: 'value' }  | 数据项的属性key  |
| isSearch  | Boolean |  true  | 是否开启搜索功能  |
| multiple  | Boolean |  true  | 是否开启多选  |

### Popup-Select 示例
```
<template>
	<view class="content">
		<view class="uni-title uni-common-pl">uniapp下拉选择器（支持多选）</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择（多选）
				</view>
				<view class="uni-list-cell-db">
					<view class="as-input" @click="openFruit">
						<view class="placeholder" v-if="resultFruit==undefined||resultFruit==''">请选择你喜欢的水果</view>
						<view class="as-content" v-else>{{resultFruit}}</view>
						<uni-icons type="forward" size="16" color="#c0c4cc" class="customer-icon"></uni-icons>
					</view>
				</view>
			</view>
			
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择（多选）
				</view>
				<view class="uni-list-cell-db">
					<view class="as-input" @click="openFood">
						<view class="placeholder" v-if="resultFood==undefined||resultFood==''">请选择你喜欢的食物</view>
						<view class="as-content" v-else>{{resultFood}}</view>
						<uni-icons type="forward" size="16" color="#c0c4cc" class="customer-icon"></uni-icons>
					</view>
				</view>
			</view>
			
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择（单选）
				</view>
				<view class="uni-list-cell-db">
					<view class="as-input" @click="openCountry">
						<view class="placeholder" v-if="resultCountry==undefined||resultCountry==''">请选择你最喜欢的国家</view>
						<view class="as-content" v-else>{{resultCountry}}</view>
						<uni-icons type="forward" size="16" color="#c0c4cc" class="customer-icon"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		
		<niceui-popup-select ref="showFruit" :columns="fruits" :selectValue="fruitId" :is-search="false"
		 :option="{label:'name', value:'id'}" @confirm="confirmFruit"></niceui-popup-select>
		 <niceui-popup-select ref="showFood" :columns="foods" :selectValue="foodId"
		  :option="{label:'name', value:'id'}" @confirm="confirmFood"></niceui-popup-select>
		  
		<niceui-popup-select ref="showCountry" :columns="countrys" :selectValue="countryId" :multiple="false"
		   :option="{label:'name', value:'id'}" @confirm="confirmCountry"></niceui-popup-select>
	</view>
</template>

<script>
	import NiceuiPopupSelect from '@/components/niceui-popup-select.vue'
	export default {
		components:{NiceuiPopupSelect},
		data() {
			return {
				fruits:[
					{
						id:'1',
						name:'苹果'
					},
					{
						id:'2',
						name:'香蕉'
					},
					{
						id:'3',
						name:'桃子'
					}
				],
				fruitId:[],
				fruitName:[],
				
				foods:[
					{
						id:'1',
						name:'红烧鱼'
					},
					{
						id:'2',
						name:'炒三丝'
					},
					{
						id:'3',
						name:'青椒肉丝'
					}
				],
				foodId:[],
				foodName:[],
				
				countrys:[
					{
						id:'1',
						name:'中国'
					},
					{
						id:'2',
						name:'美国'
					},
					{
						id:'3',
						name:'日本'
					}
				],
				countryId:[],
				countryName:[]
			}
		},
		computed:{
			resultFruit(){
				return this.fruitName.join(",");
			},
			resultFood(){
				return this.foodName.join(",");
			},
			resultCountry(){
				return this.countryName.join(",");
			}
		},
		methods: {
			openFruit(){
				this.$refs.showFruit.showPopup()
			},
			confirmFruit(value,data) {
			  this.fruitId = value
			  this.fruitName = data.map(it=>it.name)
			  this.$refs.showFruit.closePopup()
			},
			
			openFood(){
				this.$refs.showFood.showPopup()
			},
			confirmFood(value,data) {
			  this.foodId = value
			  this.foodName = data.map(it=>it.name)
			  this.$refs.showFood.closePopup()
			},
			
			openCountry(){
				this.$refs.showCountry.showPopup()
			},
			confirmCountry(value,data) {
			  console.log('confirmCountry---------',value,data)
			  this.countryId = value
			  this.countryName = data.map(it=>it.name)
			  this.$refs.showCountry.closePopup()
			},
		}
	}
</script>

<style lang="scss" scoped>
.content{
	background-color: #f7f7f7;
	width: 100vw;
	height: 100vh;
	
}
.uni-title{
	font-size: 33rpx;
	font-weight: bold;
	padding: 20rpx 20rpx;
}
.uni-list-cell{
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 20rpx;
	.uni-list-cell-left{
		font-size: 35rpx;
	}
}
.uni-list-cell-db{
	flex:1
}
.as-input{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	.customer-icon{
		padding: 0 0 0 5rpx;
	}
	.placeholder{
		font-size:33rpx;
		color:#999;
	}
	.as-content{
		color: #333;
		font-size: 33rpx;
	}
}
</style>

```