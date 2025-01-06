import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Projects } from '../+projects/projects.const';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  projects = Projects;
  blogId: string = '';
  projectId: string = '';
  blogContent = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.queryParamMap.subscribe((params) => {
        this.blogId = params.get('blogId') as string;
        this.projectId = params.get('projectId') as string;
        this.getBlogContent(parseInt(this.projectId), parseInt(this.blogId));
      })
    );
  }

  getBlogContent(projectId: number, blogId: number) {
    const project = this.projects.find((p) => p.id === projectId);

    if (project) {
      const blog = project.relatedBlogs.find((b) => b.id === blogId);

      if (blog) {
        this.blogContent = blog.blogContent;
      } else {
        this.blogContent = '<h1>Blog not found for the given blogId</h1>';
      }
    } else {
      this.blogContent = '<h1>Blog not found for the given blogId</h1>';
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
