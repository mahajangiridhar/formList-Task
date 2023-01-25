import { Component } from '@angular/core';
import { IformList } from './iform-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formList = [
    {
      id: 1,
      name: 'Test 1',
      formId: '8979f9879f'
    },
    {
      id: 2,
      name: 'Test 2',
      formId: 'a8098981'
    },
    {
      id: 3,
      name: 'Test 3',
      formId: 'a8098981'
    },
    {
      id: 4,
      name: 'Test 4',
      formId: 'g60c06'
    },
    {
      id: 5,
      name: 'Test 5',
      formId: '8979f9879f'
    }
  ];
  processedData: any[] = []

  ngOnInit() {
    this.processFormData(this.formList);
  }

  processFormData(arr: IformList[]) {
    let formIdList = Array.from(new Set(arr.map((ele:IformList)=> ele.formId)))
    formIdList.forEach((item)=>{
     let chunk = arr.filter((ele:IformList)=> ele.formId === item).map((ele:IformList)=> ele.name)
     let obj: any = {}
     obj.formId = item;
     obj.name = chunk;
     this.processedData.push(obj)
    })
  }
}
