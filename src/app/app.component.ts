import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskdirectives';
  pricecard =[
    {
     type : "FREE",
     price : 0,
     period: "month",
     list :[
       {
         title: "Single User",
         isAvilable:true,
         highlight:false,
       },
       {
        title: "5GB Storage",
        isAvilable:true,
        highlight:false,
       },
       {
        title: "Unlimited Public Projects",
        isAvilable:true,
        highlight:false,
       },
       {
        title: "Community Access",
        isAvilable:true,
        highlight:false,
       },
       {
        title: "Unlimited Private Projects",
        isAvilable:false,
        highlight:false,
       },
       {
        title: "Dedicated Phone Support",
        isAvilable:false,
        highlight:false,
       },
       {
        title: "Free Subdomain",
        isAvilable:false,
        highlight:false,
       },
       {
        title: "Monthly Status Reports",
        isAvilable:false,
        highlight:false,
       },
     ]
    },
    {
      type : "PLUS",
      price : 9,
      period: "month",
      list :[
        {
          title: "5 Users",
          isAvilable:true,
          highlight:true,
        },
        {
          title: "50GB Storage",
          isAvilable:true,
          highlight:false,
        },
        {
          title: "Unlimited Public Projects",
          isAvilable:true,
          highlight:false,
        },
        {
          title: "Community Access",
          isAvilable:true,
          highlight:false,
        },
        {
          title: "Unlimited Private Projects",
          isAvilable:true,
          highlight:false,
        },
        {
          title: "Dedicated Phone Support",
          isAvilable:true,
          highlight:false,
        },
        {
          title: "Free Subdomain",
          isAvilable:true,
          highlight:false,
        },
        {
          title: "Monthly Status Reports",
          isAvilable:false,
          highlight:false,
        },
      ]
    },
    { type : "PRO",
    price : 49,
    period: "month",
    list :[
      {
        title: "Unlimited Users",
        isAvilable:true,
        highlight:true,
      },
      {
        title: "150GB Storage",
        isAvilable:true,
        highlight:false,
      },
      {
        title: "Unlimited Public Projects",
        isAvilable:true,
        highlight:false,
      },
      {
        title: "Community Access",
        isAvilable:true,
        highlight:false,
      },
      {
        title: "Unlimited Private Projects",
        isAvilable:true,
        highlight:false,
      },
      {
        title: "Dedicated Phone Support",
        isAvilable:true,
        highlight:false,
      },
      {
        title: "Unlimited Free Subdomains",
        isAvilable:true,
        highlight:true,
      },
      {
        title: "Monthly Status Reports",
        isAvilable:true,
        highlight:false,
      },
    ]
    },
  ]
}
