/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateBlogInput = {
  id?: string | null;
  name: string;
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelBlogConditionInput | null> | null;
  or?: Array<ModelBlogConditionInput | null> | null;
  not?: ModelBlogConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateBlogInput = {
  id: string;
  name?: string | null;
};

export type DeleteBlogInput = {
  id?: string | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  blogID: string;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  blogID?: ModelIDInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  blogID?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  postID: string;
  content: string;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  postID?: string | null;
  content?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelBlogFilterInput | null> | null;
  or?: Array<ModelBlogFilterInput | null> | null;
  not?: ModelBlogFilterInput | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  blogID?: ModelIDInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type CreateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  content: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  content: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  content: string;
};

export type GetBlogQuery = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListBlogsQuery = {
  __typename: "ModelBlogConnection";
  items: Array<{
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  content: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    postID: string;
    post: {
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
    } | null;
    content: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  content: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  content: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
  content: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBlog(
    input: CreateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<CreateBlogMutation> {
    const statement = `mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
        createBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBlogMutation>response.data.createBlog;
  }
  async UpdateBlog(
    input: UpdateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<UpdateBlogMutation> {
    const statement = `mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
        updateBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBlogMutation>response.data.updateBlog;
  }
  async DeleteBlog(
    input: DeleteBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<DeleteBlogMutation> {
    const statement = `mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
        deleteBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBlogMutation>response.data.deleteBlog;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async GetBlog(id: string): Promise<GetBlogQuery> {
    const statement = `query GetBlog($id: ID!) {
        getBlog(id: $id) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBlogQuery>response.data.getBlog;
  }
  async ListBlogs(
    filter?: ModelBlogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBlogsQuery> {
    const statement = `query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
        listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            posts {
              __typename
              nextToken
              items {
                __typename
                id
                title
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBlogsQuery>response.data.listBlogs;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            post {
              __typename
              id
              title
              blogID
            }
            content
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  OnCreateBlogListener: Observable<OnCreateBlogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateBlog {
        onCreateBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateBlogSubscription>;

  OnUpdateBlogListener: Observable<OnUpdateBlogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBlog {
        onUpdateBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateBlogSubscription>;

  OnDeleteBlogListener: Observable<OnDeleteBlogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBlog {
        onDeleteBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteBlogSubscription>;

  OnCreatePostListener: Observable<OnCreatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreatePostSubscription>;

  OnUpdatePostListener: Observable<OnUpdatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdatePostSubscription>;

  OnDeletePostListener: Observable<OnDeletePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeletePostSubscription>;

  OnCreateCommentListener: Observable<
    OnCreateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          content
        }
      }`
    )
  ) as Observable<OnCreateCommentSubscription>;

  OnUpdateCommentListener: Observable<
    OnUpdateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          content
        }
      }`
    )
  ) as Observable<OnUpdateCommentSubscription>;

  OnDeleteCommentListener: Observable<
    OnDeleteCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          content
        }
      }`
    )
  ) as Observable<OnDeleteCommentSubscription>;
}
