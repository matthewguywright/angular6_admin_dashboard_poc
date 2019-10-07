import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state?: string;
  name?: string;
  type: string;
  icon?: string;
  classes?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    type: 'title',
    name: 'MAIN'
  },
  {
    state: '/',
    name: 'Dashboard',
    type: 'link',
    icon: 'fa fa-fw fa-dashboard'
  },
  {
    state: 'docs',
    name: 'Support',
    type: 'link',
    icon: 'fa fa-fw fa-question-circle'
  },
  /*{
    type: 'divider'
  },
  {
    type: 'title',
    name: 'APPS'
  },
  {
    state: 'email',
    name: 'EMAIL',
    type: 'link',
    icon: 'ion-ios-email',
    badge: [
      {
        type: 'warning',
        value: 'NEW'
      }
    ]
  },
  {
    state: 'social',
    name: 'SOCIAL',
    type: 'link',
    icon: 'ion-ios-person'
  },
  {
    state: 'calendar',
    name: 'CALENDAR',
    type: 'link',
    icon: 'ion-ios-calendar'
  },
  {
    state: 'taskboard',
    name: 'TASKBOARD',
    type: 'link',
    icon: 'ion-ios-paper'
  },*/
  /*{
    type: 'divider'
  },
  {
    type: 'title',
    name: 'UI'
  },
  {
    state: 'components',
    name: 'COMPONENTS',
    type: 'sub',
    icon: 'ion-ios-albums',
    badge: [
      {
        type: 'success',
        value: '5'
      }
    ],
    children: [
      {
        state: 'buttons',
        name: 'BUTTONS'
      },
      {
        state: 'accordion',
        name: 'ACCORDION'
      },
      {
        state: 'alert',
        name: 'ALERT'
      },
      {
        state: 'carousel',
        name: 'CAROUSEL'
      },
      {
        state: 'collapse',
        name: 'COLLAPSE'
      },
      {
        state: 'datepicker',
        name: 'DATEPICKER'
      },
      {
        state: 'dropdown',
        name: 'DROPDOWN'
      },
      {
        state: 'modal',
        name: 'MODAL'
      },
      {
        state: 'pagination',
        name: 'PAGINATION'
      },
      {
        state: 'popover',
        name: 'POPOVER'
      },
      {
        state: 'progress',
        name: 'PROGRESS'
      },
      {
        state: 'rating',
        name: 'RATING'
      },
      {
        state: 'tabs',
        name: 'TABS'
      },
      {
        state: 'timepicker',
        name: 'TIMEPICKER'
      },
      {
        state: 'tooltip',
        name: 'TOOLTIP'
      },
      {
        state: 'typeahead',
        name: 'TYPEAHEAD'
      }
    ]
  },
  {
    state: 'cards',
    name: 'CARDS',
    type: 'sub',
    icon: 'ion-ios-photos',
    children: [
      {
        state: 'basic',
        name: 'BASIC'
      },
      {
        state: 'draggable',
        name: 'DRAGGABLE'
      }
    ]
  },
  {
    state: 'forms',
    name: 'FORMS',
    type: 'sub',
    icon: 'ion-ios-box',
    children: [
      {
        state: 'basic',
        name: 'BASIC'
      },
      {
        state: 'masks',
        name: 'MASKS'
      },
      {
        state: 'validation',
        name: 'VALIDATION'
      },
      {
        state: 'upload',
        name: 'UPLOAD'
      }
    ]
  },
  {
    state: 'tables',
    name: 'TABLES',
    type: 'sub',
    icon: 'ion-ios-grid-view',
    badge: [
      {
        type: 'primary',
        value: '2'
      }
    ],
    children: [
      {
        state: 'basic',
        name: 'BASIC'
      },
      {
        state: 'responsive',
        name: 'RESPONSIVE'
      }
    ]
  },*/
  /*{
    type: 'divider'
  },
  {
    type: 'title',
    name: 'DATAVIZ'
  },
  {
    state: 'datatable',
    name: 'DATATABLES',
    type: 'sub',
    icon: 'ion-ios-list',
    children: [
      {
        state: 'fullscreen',
        name: 'FULLSCREEN'
      },
      {
        state: 'editing',
        name: 'EDITING'
      },
      {
        state: 'filter',
        name: 'FILTER'
      },
      {
        state: 'paging',
        name: 'PAGING'
      },
      {
        state: 'pinning',
        name: 'PINNING'
      },
      {
        state: 'selection',
        name: 'SELECTION'
      },
      {
        state: 'sorting',
        name: 'SORTING'
      }
    ]
  },
  {
    state: 'charts',
    name: 'CHARTS',
    type: 'sub',
    icon: 'ion-ios-analytics',
    badge: [
      {
        type: 'danger',
        value: 'HOT'
      }
    ],
    children: [
      {
        state: 'bar',
        name: 'BAR'
      },
      {
        state: 'pie',
        name: 'PIE'
      },
      {
        state: 'line',
        name: 'LINE'
      },
      {
        state: 'misc',
        name: 'MISC'
      }
    ]
  },
  {
    state: 'maps',
    name: 'MAPS',
    type: 'sub',
    icon: 'ion-ios-navigate',
    children: [
      {
        state: 'google',
        name: 'GOOGLE'
      },
      {
        state: 'fullscreen',
        name: 'FULLSCREEN'
      }
    ]
  },*/
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Clientele'
  },
  {
    state: 'clients',
    name: 'Clients',
    type: 'sub',
    icon: 'fa fa-fw fa-users',
    children: [
      {
        state: 'client-list',
        name: 'All Clients'
      },
      {
        state: 'add-client',
        name: 'Add Client'
      }
    ]
  },
  {
    state: 'pages',
    name: 'Portfolio',
    type: 'sub',
    icon: 'fa fa-fw fa-folder',
    children: [
      {
        state: 'activity',
        name: 'Portfolios'
      },
      {
        state: 'forum',
        name: 'Asset Classes'
      },
      {
        state: 'timeline',
        name: 'Smart Symbols'
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    name: 'Applications',
    type: 'title'
  },
    {
      state: 'forum',
      type: 'link',
      name: 'Social Security Timing',
      icon: 'fa fa-fw fa-usd',
      classes: 'crimson'
    },
    {
      state: 'timeline',
      name: 'Tax Clarity',
      type: 'link',
      icon: 'fa fa-fw fa-graduation-cap',
      classes: 'skyBlue'
    },
    {
      state: 'activity',
      type: 'link',
      icon: 'fa fa-fw fa-bar-chart',
      name: 'Smart Risk',
      classes: 'green'
    },
    {
      state: 'activity',
      type: 'link',
      name: 'Income InSight',
      icon: 'fa fa-fw fa-credit-card',
      classes: 'orange',
      badge: [
        {
          type: 'success',
          value: 'NEW'
        }
      ]
    },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'Resources'
  },
  {
    state: '/training',
    name: 'Training',
    type: 'link',
    icon: 'fa fa-fw fa-video-camera'
  },
  {
    state: '/resources',
    name: 'Resources',
    type: 'link',
    icon: 'fa fa-fw fa-briefcase'
  }
  /*{
    state: 'error',
    name: 'ERROR',
    type: 'sub',
    icon: 'ion-ios-information',
    children: [
      {
        state: '404',
        name: '404'
      },
      {
        state: '500',
        name: '500'
      }
    ]
  },
  {
    state: 'media',
    name: 'MEDIA',
    type: 'sub',
    icon: 'ion-ios-film',
    children: [
      {
        state: 'grid',
        name: 'GRID'
      },
      {
        state: 'tile',
        name: 'TILE'
      }
    ]
  }*/
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
