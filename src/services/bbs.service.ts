import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {PostBrief, PostDetail} from "../classes/post";
import {Page} from "../classes/page";

@Injectable()
export class BbsService {

  constructor(
    private apiSvc: ApiService,
  ) {}

  postList(pageNumber:number, orderBy:string='id'):Promise<Page<PostBrief>>{
    return this.apiSvc.get(`/bbs/post/list/${pageNumber}/`,{
      orderBy: orderBy
    });
  }

  postDetail(postId):Promise<PostDetail>{
    return this.apiSvc.get(`/bbs/post/${postId}/`);
  }

}
