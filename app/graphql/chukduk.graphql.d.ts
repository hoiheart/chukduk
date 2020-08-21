/* 1ff585517847af8ef1ed0fbeb3a3ba7f69bc18e8
 * This file is automatically generated by graphql-let. */

/// <reference types="react" />
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
};
export declare type Community = {
    __typename?: 'Community';
    id: Scalars['ID'];
    bbs: Scalars['String'];
    no: Scalars['String'];
    url: Scalars['String'];
    category: Scalars['String'];
    title: Scalars['String'];
    date: Scalars['Date'];
    views: Scalars['Int'];
    hasMovie?: Maybe<Scalars['Boolean']>;
    hasImage?: Maybe<Scalars['Boolean']>;
};
export declare type Media = {
    __typename?: 'Media';
    id: Scalars['ID'];
    no: Scalars['String'];
    category: Scalars['String'];
    url: Scalars['String'];
    title: Scalars['String'];
    date: Scalars['Date'];
    thumb: Scalars['String'];
    views: Scalars['Int'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    viewCommunity?: Maybe<Community>;
    viewMedia?: Maybe<Media>;
};
export declare type MutationViewCommunityArgs = {
    data?: Maybe<ViewCommunity>;
};
export declare type MutationViewMediaArgs = {
    data?: Maybe<ViewMedia>;
};
export declare type Query = {
    __typename?: 'Query';
    getCommunityList?: Maybe<Array<Maybe<Community>>>;
    getMediaList?: Maybe<Array<Maybe<Media>>>;
};
export declare type QueryGetCommunityListArgs = {
    type?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    bbs?: Maybe<Scalars['String']>;
    category?: Maybe<Scalars['String']>;
    lastID?: Maybe<Scalars['ID']>;
};
export declare type QueryGetMediaListArgs = {
    title?: Maybe<Scalars['String']>;
    category?: Maybe<Scalars['String']>;
    lastID?: Maybe<Scalars['ID']>;
};
export declare type ViewCommunity = {
    bbs: Scalars['String'];
    no: Scalars['String'];
};
export declare type ViewMedia = {
    no: Scalars['String'];
};
export declare type GetCommunityListQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetCommunityListQuery = ({
    __typename?: 'Query';
} & {
    getCommunityList?: Maybe<Array<Maybe<({
        __typename?: 'Community';
    } & Pick<Community, 'id'>)>>>;
});
export declare const GetCommunityListDocument: import("graphql").DocumentNode;
export declare type GetCommunityListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCommunityListQuery, GetCommunityListQueryVariables>, 'query'>;
export declare const GetCommunityListComponent: (props: GetCommunityListComponentProps) => JSX.Element;
/**
 * __useGetCommunityListQuery__
 *
 * To run a query within a React component, call `useGetCommunityListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityListQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useGetCommunityListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCommunityListQuery, GetCommunityListQueryVariables>): ApolloReactCommon.QueryResult<GetCommunityListQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetCommunityListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCommunityListQuery, GetCommunityListQueryVariables>): ApolloReactHooks.QueryTuple<GetCommunityListQuery, Exact<{
    [key: string]: never;
}>>;
export declare type GetCommunityListQueryHookResult = ReturnType<typeof useGetCommunityListQuery>;
export declare type GetCommunityListLazyQueryHookResult = ReturnType<typeof useGetCommunityListLazyQuery>;
export declare type GetCommunityListQueryResult = ApolloReactCommon.QueryResult<GetCommunityListQuery, GetCommunityListQueryVariables>;
