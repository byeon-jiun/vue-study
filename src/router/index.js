import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/binding/DataBinding.vue'
import DataBindingHtml from '../views/binding/DataBindingHtml'
import DataBindingInputText from '../views/binding/DataBindingInputText'
import DataBindingInputNumber from '../views/binding/DataBindingInputNumber'
import DataBindingInputTextarea from '../views/binding/DataBindingInputTextarea'
import DataBindingSelect from '../views/binding/DataBindingSelect'
import DataBindingCheckbox from '../views/binding/DataBindingCheckbox'
import DataBindingCheckbox2 from '../views/binding/DataBindingCheckbox2'
import DataBindingRadio from "../views/binding/DataBindingRadio";
import DataBindingAttribue from "../views/binding/DataBindingAttribue";
import DataBindingButton from "../views/binding/DataBindingButton";
import DataBindingClass from "../views/binding/DataBindingClass";
import DataBindingClass2 from "../views/binding/DataBindingClass2";
import DataBindingStyle from "../views/binding/DataBindingStyle";
import DataBindingList from "@/views/binding/DataBindingList";
import RenderingVIf from "@/views/rendering/RenderingVIf";
import RenderingVShow from "@/views/rendering/RenderingVShow";
import EventClick from "@/views/event/EventClick";
import EventClick2 from "@/views/event/EventClick2";
import EventClick3 from "@/views/event/EventClick3";
import EventChange from "@/views/event/EventChange";
import EventKey from "@/views/event/EventKey";
import Computed from "@/views/computed/Computed";
import Watch from "@/views/watch/Watch";
import Watch2 from "@/views/watch/Watch2";
import DataBindingList2 from "@/views/binding/DataBindingList2";
import NestedComponent from "@/views/nested/NestedComponent";
import NestedComponent2 from "@/views/nested/NestedComponent2";
import NestedComponent3 from "@/views/nested/NestedComponent3";
import ParentComponent from "@/views/parent/ParentComponent";
import ParentComponent2 from "@/views/parent/ParentComponent2";
import ParentComponent3 from "@/views/parent/ParentComponent3";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindinginputtextarea',
    name: 'DataBindingInputTextarea',
    component: DataBindingInputTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databindingattribue',
    name: 'DataBindingAttribue',
    component: DataBindingAttribue
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/renderingvshow',
    name: 'RenderingVShow',
    component: RenderingVShow
  },
  {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventclick2',
    name: 'EventClick2',
    component: EventClick2
  },
  {
    path: '/eventclick3',
    name: 'EventClick3',
    component: EventClick3
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/eventkey',
    name: 'EventKey',
    component: EventKey
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/watch2',
    name: 'Watch2',
    component: Watch2
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/nestedcomponent2',
    name: 'NestedComponent2',
    component: NestedComponent2
  },
  {
    path: '/nestedcomponent3',
    name: 'NestedComponent3',
    component: NestedComponent3
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/parentcomponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/parentcomponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
