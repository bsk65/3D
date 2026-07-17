// js/state.js — Central app-state.
// Ét delt singleton-objekt som alle moduler importerer og muterer.
// Reference-identiteten er bevidst delt, så en ændring ét sted ses alle steder
// (samme adfærd som da state var en modul-lokal const i main.js).

export const state = {
  user:null, profile:null, isAdmin:false, isSuperAdmin:false,
  friends:[], courses:[], rounds:[], round:null, course:null, meetups:[],
  currentCourse:null, courseMap:null, courseMapLayer:null, approvedDraft:{new:[],edit:[]},
  gpsTracking:false, warnThreshold:8,
  deleteConfirm:{}, editFriendId:null, finishTap:0, abortTap:0
}
