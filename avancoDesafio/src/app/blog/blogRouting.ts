import { BlogGuard } from './guards/blogGuard';
import {Route} from '@angular/router';
import {PostListComponent} from './posts/list/postListComponent';


export const BlogRouting: Route[] = [
   {path:'',component:PostListComponent,canActivate:[BlogGuard]}
    
];
