import request from "@/utils/request";

export default {
  getHospSetList(page, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${page}/${limit}`,
      method: "post",
      data: searchObj
    });
  },

  //删除医院设置
  deleteHospSet(id) {
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: "delete"
    });
  }
};
