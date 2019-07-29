import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form:FormGroup;

  constructor(builder:FormBuilder){

    this.form = builder.group({
      'mobileNo': new FormControl('',[Validators.required]),
      'text': new FormControl('',[Validators.required]),
    });

  }


  onSubmit(){
    const mobileNo = this.form.get('mobileNo').value;
    const text = this.form.get('text').value;
    this.openChat(mobileNo,text);
    this.form.reset();
  }

  /**
   * 
   * @param mobileNo 
   * Whatsapp Api https://wa.me/<number>/?text=urlencodedtext
   */
  private openChat(mobileNo:number,text:string){
    text = encodeURI(text);
    console.log(text);
    let url = `https://wa.me/${mobileNo}/?text=${text}`;
    // open url with new tab
    window.open(url,'_blank');
  }
}
