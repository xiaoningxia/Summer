import request from '@/utils/request' 

//地区列表
export function getWeatherList(lng,lat) {
  return request({
   method:'GEt',
   url:'/v7/weather/7d?location='+lng+','+lat+'&key=9dc22102b3c94c4090973499eb42503b'
  })
}

