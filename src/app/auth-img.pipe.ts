import { Pipe, PipeTransform } from "@angular/core";
import { GenericService } from "./services/generic/generic.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Pipe({
  name: "authImg",
})
export class AuthImgPipe implements PipeTransform {
  constructor(private auth: GenericService) {}

  transform(src: string): Observable<string> {
    if (src) {
      return this.auth.get(src, { responseType: "blob" }).pipe(
        map((result) => {
          return URL.createObjectURL(result);
        })
      );
    }
  }

  /*
  async transform(src: string): Promise<string> {
    const imageBlob = await this.auth.get(src, { responseType: "blob" }).toPromise();
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(imageBlob);
    });
  }

  */
}
