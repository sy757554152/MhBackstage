import request from '@/utils/request';

export async function addStaff(params) {
  return request('/api/staff/addStaff', {
    method: 'POST',
    data: params,
  });
}

export async function getStaff() {
  return request('/api/staff/getStaff', {
    method: 'GET',
  });
}

export async function deleStaff(params) {
  return request('/api/staff/deleStaff', {
    method: 'POST',
    data: params,
  });
}

export async function addStaffPic(params) {
  return request('/api/staff/addStaffPic', {
    method: 'POST',
    data: params,
  });
}

export async function getStaffPic(params) {
  return request('/api/staff/getStaffPic', {
    method: 'GET',
    params,
  });
}

export async function deleStaffPic(params) {
  return request('/api/staff/deleStaffPic', {
    method: 'POST',
    data: params,
  });
}

export async function changeStaff(params) {
  return request('/api/staff/changeStaff', {
    method: 'POST',
    data: params,
  });
}

export async function changeStaffPic(params) {
  return request('/api/staff/changeStaffPic', {
    method: 'POST',
    data: params,
  });
}

export async function addStaffType(params) {
  return request('/api/staff/addStaffType', {
    method: 'POST',
    data: params,
  });
}

export async function getStaffType() {
  return request('/api/staff/getStaffType', {
    method: 'GET',
  });
}

export async function deleStaffType(params) {
  return request('/api/staff/deleStaffType', {
    method: 'POST',
    data: params,
  });
}
