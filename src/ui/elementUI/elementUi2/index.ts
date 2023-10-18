import { componentsReducer, propsReducer } from '../../utils'
import ElRow from './row.json'
import ElCalendar from './calendar.json'
import ElCol from './col.json'
import ElAlert from './alert.json'
import ElButton from './button.json'
import ElContainer from './container.json'
import ElHeader from './header.json'
import ElAside from './aside.json'
import ElFooter from './footer.json'
import ElLink from './link.json'
import ElRadio from './radio.json'
import ElRadioGroup from './radioGroup.json'
import ElRadioButton from './radioButton.json'
import ElForm from './form.json'
import ElFormItem from './formItem.json'
import ElTable from './table.json'
import ElTableColumn from './tableColumn.json'
import ElCard from './card.json'
import ElInput from './input.json'
import ElInputNumber from './inputNumber.json'
import ElAutocomplete from './autocomplete.json'
import ElSelect from './select.json'
import ElCascader from './cascader.json'
import ElCascaderPanel from './cascaderPanel.json'
import ElCheckbox from './checkbox.json'
import ElCheckboxGroup from './checkboxGroup.json'
import ElCheckboxButton from './checkboxButton.json'
import ElBadge from './badge.json'
import ElBreadcrumb from './breadcrumb.json'
import ElCarousel from './carousel.json'
import ElCarouselItem from './carouselItem.json'
import ElCollapse from './collapse.json'
import ElCollapseItem from './collapseItem.json'
import ElColorPicker from './colorPicker.json'
import ElImage from './image.json'
import ElEmpty from './empty.json'
import ElDropdown from './dropdown.json'
import ElDropdownMenuItem from './dropdownMenuItem.json'
import ElDrawer from './drawer.json'
import ElDivider from './divider.json'
import ElDialog from './dialog.json'
import ElDescriptions from './descriptions.json'
import ElDatePicker from './datePicker.json'
import ElDatetimePicker from './datetimePicker.json'
import ElMenu from './menu.json'
import ElMenuItem from './menuItem.json'
import ElPageHeader from './pageHeader.json'
import ElPagination from './pagination.json'
import ElPopconfirm from './popconfirm.json'
import ElPopover from './popover.json'
import ElProgress from './progress.json'
import ElRate from './rate.json'
import ElResult from './result.json'
import ElSkeleton from './skeleton.json'
import ElSkeletonItem from './skeletonItem.json'
import ElSlider from './slider.json'
import ElStatistic from './statistic.json'
import ElStep from './step.json'
import ElSteps from './steps.json'
import ElSubmenu from './submenu.json'
import ElSwitch from './switch.json'
import ElTabPane from './tabPane.json'
import ElTabs from './tabs.json'
import ElTag from './tag.json'
import ElTimeline from './timeline.json'
import ElTimelineItem from './timelineItem.json'
import ElTimePicker from './timePicker.json'
import ElTimeSelect from './timeSelect.json'
import ElTooltip from './tooltip.json'
import ElTransfer from './transfer.json'
import ElTree from './tree.json'
import ElUpload from './upload.json'
import ElAvatar from './avatar.json'
import ElBacktop from './backtop.json'
import ElOption from './option.json'
import ElOptionGroup from './optionGroup.json'

export function elementUi2(extensionContext: any) {
  const map: any = [
    ElRow,
    ElCol,
    ElCalendar,
    ElAlert,
    ElButton,
    ElContainer,
    ElHeader,
    ElAside,
    ElFooter,
    ElLink,
    ElRadio,
    ElRadioGroup,
    ElRadioButton,
    ElForm,
    ElFormItem,
    ElTable,
    ElTableColumn,
    ElCard,
    ElInput,
    ElInputNumber,
    ElAutocomplete,
    ElSelect,
    ElCascader,
    ElCascaderPanel,
    ElCheckbox,
    ElCheckboxGroup,
    ElCheckboxButton,
    ElBadge,
    ElBreadcrumb,
    ElCarousel,
    ElCarouselItem,
    ElCollapse,
    ElCollapseItem,
    ElColorPicker,
    ElImage,
    ElEmpty,
    ElDropdown,
    ElDropdownMenuItem,
    ElDrawer,
    ElDivider,
    ElDialog,
    ElDescriptions,
    ElDatePicker,
    ElDatetimePicker,
    ElMenu,
    ElMenuItem,
    ElPageHeader,
    ElPagination,
    ElPopconfirm,
    ElPopover,
    ElProgress,
    ElRate,
    ElResult,
    ElSkeleton,
    ElSkeletonItem,
    ElSlider,
    ElStatistic,
    ElStep,
    ElSteps,
    ElSubmenu,
    ElSwitch,
    ElTabPane,
    ElTabs,
    ElTag,
    ElTimeline,
    ElTimelineItem,
    ElTimePicker,
    ElTimeSelect,
    ElTooltip,
    ElTransfer,
    ElTree,
    ElUpload,
    ElAvatar,
    ElBacktop,
    ElOption,
    ElOptionGroup,
  ]
  const icons = [
    'platform-eleme',
    'eleme',
    'delete-solid',
    'delete',
    's-tools',
    'setting',
    'user-solid',
    'user',
    'phone',
    'phone-outline',
    'more',
    'more-outline',
    'star-on',
    'star-off',
    's-goods',
    'goods',
    'warning',
    'warning-outline',
    'question',
    'info',
    'remove',
    'circle-plus',
    'success',
    'error',
    'zoom-in',
    'zoom-out',
    'remove-outline',
    'circle-plus-outline',
    'circle-check',
    'circle-close',
    's-help',
    'help',
    'minus',
    'plus',
    'check',
    'close',
    'picture',
    'picture-outline',
    'picture-outline-round',
    'upload',
    'upload2',
    'download',
    'camera-solid',
    'camera',
    'video-camera-solid',
    'video-camera',
    'message-solid',
    'bell',
    's-cooperation',
    's-order',
    's-platform',
    's-fold',
    's-unfold',
    's-operation',
    's-promotion',
    's-home',
    's-release',
    's-ticket',
    's-management',
    's-open',
    's-shop',
    's-marketing',
    's-flag',
    's-comment',
    's-finance',
    's-claim',
    's-custom',
    's-opportunity',
    's-data',
    's-check',
    's-grid',
    'menu',
    'share',
    'd-caret',
    'caret-left',
    'caret-right',
    'caret-bottom',
    'caret-top',
    'bottom-left',
    'bottom-right',
    'back',
    'right',
    'bottom',
    'top',
    'top-left',
    'top-right',
    'arrow-left',
    'arrow-right',
    'arrow-down',
    'arrow-up',
    'd-arrow-left',
    'd-arrow-right',
    'video-pause',
    'video-play',
    'refresh',
    'refresh-right',
    'refresh-left',
    'finished',
    'sort',
    'sort-up',
    'sort-down',
    'rank',
    'loading',
    'view',
    'c-scale-to-original',
    'date',
    'edit',
    'edit-outline',
    'folder',
    'folder-opened',
    'folder-add',
    'folder-remove',
    'folder-delete',
    'folder-checked',
    'tickets',
    'document-remove',
    'document-delete',
    'document-copy',
    'document-checked',
    'document',
    'document-add',
    'printer',
    'paperclip',
    'takeaway-box',
    'search',
    'monitor',
    'attract',
    'mobile',
    'scissors',
    'umbrella',
    'headset',
    'brush',
    'mouse',
    'coordinate',
    'magic-stick',
    'reading',
    'data-line',
    'data-board',
    'pie-chart',
    'data-analysis',
    'collection-tag',
    'film',
    'suitcase',
    'suitcase-1',
    'receiving',
    'collection',
    'files',
    'notebook-1',
    'notebook-2',
    'toilet-paper',
    'office-building',
    'school',
    'table-lamp',
    'house',
    'no-smoking',
    'smoking',
    'shopping-cart-full',
    'shopping-cart-1',
    'shopping-cart-2',
    'shopping-bag-1',
    'shopping-bag-2',
    'sold-out',
    'sell',
    'present',
    'box',
    'bank-card',
    'money',
    'coin',
    'wallet',
    'discount',
    'price-tag',
    'news',
    'guide',
    'male',
    'female',
    'thumb',
    'cpu',
    'link',
    'connection',
    'open',
    'turn-off',
    'set-up',
    'chat-round',
    'chat-line-round',
    'chat-square',
    'chat-dot-round',
    'chat-dot-square',
    'chat-line-square',
    'message',
    'postcard',
    'position',
    'turn-off-microphone',
    'microphone',
    'close-notification',
    'bangzhu',
    'time',
    'odometer',
    'crop',
    'aim',
    'switch-button',
    'full-screen',
    'copy-document',
    'mic',
    'stopwatch',
    'medal-1',
    'medal',
    'trophy',
    'trophy-1',
    'first-aid-kit',
    'discover',
    'place',
    'location',
    'location-outline',
    'location-information',
    'add-location',
    'delete-location',
    'map-location',
    'alarm-clock',
    'timer',
    'watch-1',
    'watch',
    'lock',
    'unlock',
    'key',
    'service',
    'mobile-phone',
    'bicycle',
    'truck',
    'ship',
    'basketball',
    'football',
    'soccer',
    'baseball',
    'wind-power',
    'light-rain',
    'lightning',
    'heavy-rain',
    'sunrise',
    'sunrise-1',
    'sunset',
    'sunny',
    'cloudy',
    'partly-cloudy',
    'cloudy-and-sunny',
    'moon',
    'moon-night',
    'dish',
    'dish-1',
    'food',
    'chicken',
    'fork-spoon',
    'knife-fork',
    'burger',
    'tableware',
    'sugar',
    'dessert',
    'ice-cream',
    'hot-water',
    'water-cup',
    'coffee-cup',
    'cold-drink',
    'goblet',
    'goblet-full',
    'goblet-square',
    'goblet-square-full',
    'refrigerator',
    'grape',
    'watermelon',
    'cherry',
    'apple',
    'pear',
    'orange',
    'coffee',
    'ice-tea',
    'ice-drink',
    'milk-tea',
    'potato-strips',
    'lollipop',
    'ice-cream-square',
    'ice-cream-round',
  ]

  return propsReducer(map, { prefix: 'el-icon', type: 'elementUi', icons }, extensionContext)
}

export function elementUi2Components() {
  const map = [
    [
      ElRow,
      '布局',
      '<el-row></el-row>',
    ],
    [
      ElCol,
      '布局',
      '<el-col></el-col>',
    ],
    [
      ElContainer,
      '布局容器',
      '<el-container></el-container>',
    ],
    [
      ElHeader,
      '顶栏容器',
      '<el-header></el-header>',
    ],
    [
      ElAside,
      '侧边栏容器',
      '<el-aside></el-aside>',
    ],
    [
      'el-main',
      '主要区域容器',
      '<el-main></el-main>',
    ],
    [
      ElFooter,
      '底栏容器',
      '<el-footer></el-footer>',
    ],
    [
      ElButton,
      '按钮',
      '<el-button></el-button>',
    ],
    [
      ElLink,
      '文字链接',
      '<el-link></el-link>',
    ],
    [
      ElRadio,
      '单选框',
      '<el-radio></el-radio>',
    ],
    [
      ElRadioGroup,
      '单选框组',
      '<el-radio-group></el-radio-group>',
    ],
    [
      ElRadioButton,
      '按钮样式的单选组合',
      '<el-radio-button></el-radio-button>',
    ],
    [
      ElCheckbox,
      '多选框',
      '<el-checkbox></el-checkbox>',
    ],
    [
      ElCheckboxGroup,
      '多选框组',
      '<el-checkbox-group></el-checkbox-group>',
    ],
    [
      ElCheckboxButton,
      '按钮样式的多选组合',
      '<el-checkbox-button></el-checkbox-button>',
    ],
    [
      ElInput,
      '输入框',
      '<el-input></el-input>',
    ],
    [
      ElInputNumber,
      '计数器',
      '<el-input-number></el-input-number>',
    ],
    [
      ElSelect,
      '选择器',
      '<el-select></el-select>',
    ],
    [
      ElOption,
      '基础多选',
      '<el-option></el-option>',
    ],
    [
      ElOptionGroup,
      '备选项进行分组展示',
      '<el-option-group></el-option-group>',
    ],
    [
      ElCascader,
      '级联选择器',
      '<el-cascader></el-cascader>',
    ],
    [
      ElCascaderPanel,
      '级联面板',
      '<el-cascader-panel></el-cascader-panel>',
    ],
    [
      ElSwitch,
      '开关',
      '<el-switch></el-switch>',
    ],
    [
      ElSlider,
      '滑块',
      '<el-slider></el-slider>',
    ],
    [
      ElTimeSelect,
      '时间选择器',
      '<el-time-select></el-time-select>',
    ],
    [
      ElDatePicker,
      '日期选择器/日期时间选择器',
      '<el-date-picker></el-date-picker>',
    ],
    [
      ElUpload,
      '上传',
      '<el-upload></el-upload>',
    ],
    [
      ElRate,
      '评分',
      '<el-rate></el-rate>',
    ],
    [
      ElColorPicker,
      '颜色选择器',
      '<el-color-picker></el-color-picker>',
    ],
    [
      ElTransfer,
      '穿梭框',
      '<el-transfer></el-transfer>',
    ],
    [
      ElForm,
      '表单',
      '<el-form></el-form>',
    ],
    [
      ElFormItem,
      '表单项',
      '<el-form-item></el-form-item>',
    ],
    [
      ElTable,
      '表格',
      '<el-table></el-table>',
    ],
    [
      ElTableColumn,
      '表格项',
      '<el-table-column></el-table-column>',
    ],
    [
      ElTag,
      '标签',
      '<el-tag></el-tag>',
    ],
    [
      ElProgress,
      '进度条',
      '<el-progress></el-progress>',
    ],
    [
      ElTree,
      '树形控件',
      '<el-tree></el-tree>',
    ],
    [
      ElPagination,
      '分页',
      '<el-pagination></el-pagination>',
    ],
    [
      ElBadge,
      '标记',
      '<el-badge></el-badge>',
    ],
    [
      ElAvatar,
      '头像',
      '<el-avatar></el-avatar>',
    ],
    [
      ElSkeleton,
      '骨架屏',
      '<el-skeleton></el-skeleton>',
    ],
    [
      ElEmpty,
      '空状态',
      '<el-empty></el-empty>',
    ],
    [
      ElDescriptions,
      '描述列表',
      '<el-descriptions></el-descriptions>',
    ],
    [
      'el-descriptions-item',
      '描述列表项',
      '<el-descriptions-item></el-descriptions-item>',
    ],
    [
      ElResult,
      '结果',
      '<el-result></el-result>',
    ],
    [
      ElStatistic,
      '统计数值',
      '<el-statistic></el-statistic>',
    ],
    [
      ElAlert,
      '警告',
      '<el-alert></el-alert>',
    ],
    [
      ElMenu,
      '导航菜单',
      '<el-menu></el-menu>',
    ],
    [
      ElSubmenu,
      '导航子菜单',
      '<el-submenu></el-submenu>',
    ],
    [
      ElMenuItem,
      '导航菜单项',
      '<el-menu-item></el-menu-item>',
    ],
    [
      ElTabs,
      '标签页',
      '<el-tabs></el-tabs>',
    ],
    [
      ElTabPane,
      '标签项',
      '<el-tab-pane></el-tab-pane>',
    ],
    [
      ElBreadcrumb,
      '面包屑',
      '<el-breadcrumb></el-breadcrumb>',
    ],
    [
      'el-breadcrumb-item',
      '面包屑项',
      '<el-breadcrumb-item></el-breadcrumb-item>',
    ],
    [
      ElPageHeader,
      '页头',
      '<el-page-header></el-page-header>',
    ],
    [
      ElDropdown,
      '下拉菜单',
      '<el-dropdown></el-dropdown>',
    ],
    [
      'el-dropdown-menu',
      '下拉菜单列表',
      '<el-dropdown-menu></el-dropdown-menu>',
    ],
    [
      'el-dropdown-item',
      '下拉菜单列表项',
      '<el-dropdown-item></el-dropdown-item>',
    ],
    [
      ElSteps,
      '步骤条',
      '<el-steps></el-steps>',
    ],
    [
      ElDialog,
      '对话框',
      '<el-dialog></el-dialog>',
    ],
    [
      ElTooltip,
      '文字提示',
      '<el-tooltip></el-tooltip>',
    ],
    [
      ElPopover,
      '弹出框',
      '<el-popover></el-popover>',
    ],
    [
      ElPopconfirm,
      '气泡确认框',
      '<el-popconfirm></el-popconfirm>',
    ],
    [
      ElCard,
      '卡片',
      '<el-card></el-card>',
    ],
    [
      ElCarousel,
      '走马灯',
      '<el-carousel></el-carousel>',
    ],
    [
      ElCarouselItem,
      '走马灯项',
      '<el-carousel-item></el-carousel-item>',
    ],
    [
      ElCollapse,
      '折叠面板',
      '<el-collapse></el-collapse>',
    ],
    [
      ElCollapseItem,
      '折叠面板项',
      '<el-collapse-item></el-collapse-item>',
    ],
    [
      ElTimeline,
      '时间线',
      '<el-timeline></el-timeline>',
    ],
    [
      ElTimelineItem,
      '时间线项',
      '<el-timeline-item></el-timeline-item>',
    ],
    [
      ElDivider,
      '分割线',
      '<el-divider></el-divider>',
    ],
    [
      ElCalendar,
      '日历',
      '<el-calendar></el-calendar>',
    ],
    [
      ElImage,
      '图片',
      '<el-image></el-image>',
    ],
    [
      ElBacktop,
      '回到顶部',
      '<el-backtop></el-backtop>',
    ],
    [
      ElDrawer,
      '抽屉',
      '<el-drawer></el-drawer>',
    ],
    [
      ElAutocomplete,
      '远程搜索',
      '<el-autocomplete></el-autocomplete>',
    ],
  ]
  return componentsReducer(map)
}
