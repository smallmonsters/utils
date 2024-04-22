import {reactive, ref} from "vue";
import {onLoad} from "@dcloudio/uni-app";
import {upDateReactive} from "@/utils";

export const usePreRoute = () => {
  const preRoute = ref("")
  const query = reactive({})
  
  onLoad((route) => {
    console.log(route, "route")
    const {preRoute: _preRoute, ...args} = route
    if (_preRoute && _preRoute !== "undefined") {
      preRoute.value = _preRoute
    }
    upDateReactive(query, args)
  })
  return {
    preRoute,
    query
  }
}
