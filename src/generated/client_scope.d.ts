import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type client_scope = $Result.DefaultSelection<$client_scopePayload>


/**
   * Model client_scope
   */

export type AggregateClient_scope = {
    _count: Client_scopeCountAggregateOutputType | null
    _avg: Client_scopeAvgAggregateOutputType | null
    _sum: Client_scopeSumAggregateOutputType | null
    _min: Client_scopeMinAggregateOutputType | null
    _max: Client_scopeMaxAggregateOutputType | null
  }

  export type Client_scopeAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_scopeSumAggregateOutputType = {
    id: number | null
  }

  export type Client_scopeMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_scopeMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_scopeCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_scopeAvgAggregateInputType = {
    id?: true
  }

  export type Client_scopeSumAggregateInputType = {
    id?: true
  }

  export type Client_scopeMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_scopeMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_scopeCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_scopeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_scope to aggregate.
     */
    where?: client_scopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scopes to fetch.
     */
    orderBy?: client_scopeOrderByWithRelationInput | client_scopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_scopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_scopes
    **/
    _count?: true | Client_scopeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_scopeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_scopeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_scopeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_scopeMaxAggregateInputType
  }

  export type GetClient_scopeAggregateType<T extends Client_scopeAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_scope]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_scope[P]>
      : GetScalarType<T[P], AggregateClient_scope[P]>
  }




  export type client_scopeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_scopeWhereInput
    orderBy?: client_scopeOrderByWithAggregationInput | client_scopeOrderByWithAggregationInput[]
    by: Client_scopeScalarFieldEnum[] | Client_scopeScalarFieldEnum
    having?: client_scopeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_scopeCountAggregateInputType | true
    _avg?: Client_scopeAvgAggregateInputType
    _sum?: Client_scopeSumAggregateInputType
    _min?: Client_scopeMinAggregateInputType
    _max?: Client_scopeMaxAggregateInputType
  }

  export type Client_scopeGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_scopeCountAggregateOutputType | null
    _avg: Client_scopeAvgAggregateOutputType | null
    _sum: Client_scopeSumAggregateOutputType | null
    _min: Client_scopeMinAggregateOutputType | null
    _max: Client_scopeMaxAggregateOutputType | null
  }

  type GetClient_scopeGroupByPayload<T extends client_scopeGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_scopeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_scopeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_scopeGroupByOutputType[P]>
            : GetScalarType<T[P], Client_scopeGroupByOutputType[P]>
        }
      >
    >


  export type client_scopeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_scope"]>

  export type client_scopeSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_scopePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_scope"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_scope"]>
    composites: {}
  }


  type client_scopeGetPayload<S extends boolean | null | undefined | client_scopeDefaultArgs> = $Result.GetResult<$client_scopePayload, S>

  type client_scopeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_scopeFindManyArgs, 'select' | 'include'> & {
      select?: Client_scopeCountAggregateInputType | true
    }

  export interface client_scopeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_scope'], meta: { name: 'client_scope' } }
    /**
     * Find zero or one Client_scope that matches the filter.
     * @param {client_scopeFindUniqueArgs} args - Arguments to find a Client_scope
     * @example
     * // Get one Client_scope
     * const client_scope = await prisma.client_scope.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_scopeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_scopeFindUniqueArgs<ExtArgs>>
    ): Prisma__client_scopeClient<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_scope that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_scopeFindUniqueOrThrowArgs} args - Arguments to find a Client_scope
     * @example
     * // Get one Client_scope
     * const client_scope = await prisma.client_scope.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_scopeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scopeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_scopeClient<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_scope that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scopeFindFirstArgs} args - Arguments to find a Client_scope
     * @example
     * // Get one Client_scope
     * const client_scope = await prisma.client_scope.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_scopeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scopeFindFirstArgs<ExtArgs>>
    ): Prisma__client_scopeClient<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_scope that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scopeFindFirstOrThrowArgs} args - Arguments to find a Client_scope
     * @example
     * // Get one Client_scope
     * const client_scope = await prisma.client_scope.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_scopeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scopeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_scopeClient<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_scopes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scopeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_scopes
     * const client_scopes = await prisma.client_scope.findMany()
     * 
     * // Get first 10 Client_scopes
     * const client_scopes = await prisma.client_scope.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_scopeWithIdOnly = await prisma.client_scope.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_scopeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scopeFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_scope.
     * @param {client_scopeCreateArgs} args - Arguments to create a Client_scope.
     * @example
     * // Create one Client_scope
     * const Client_scope = await prisma.client_scope.create({
     *   data: {
     *     // ... data to create a Client_scope
     *   }
     * })
     * 
    **/
    create<T extends client_scopeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_scopeCreateArgs<ExtArgs>>
    ): Prisma__client_scopeClient<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_scopes.
     *     @param {client_scopeCreateManyArgs} args - Arguments to create many Client_scopes.
     *     @example
     *     // Create many Client_scopes
     *     const client_scope = await prisma.client_scope.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_scopeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scopeCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_scope.
     * @param {client_scopeDeleteArgs} args - Arguments to delete one Client_scope.
     * @example
     * // Delete one Client_scope
     * const Client_scope = await prisma.client_scope.delete({
     *   where: {
     *     // ... filter to delete one Client_scope
     *   }
     * })
     * 
    **/
    delete<T extends client_scopeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_scopeDeleteArgs<ExtArgs>>
    ): Prisma__client_scopeClient<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_scope.
     * @param {client_scopeUpdateArgs} args - Arguments to update one Client_scope.
     * @example
     * // Update one Client_scope
     * const client_scope = await prisma.client_scope.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_scopeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_scopeUpdateArgs<ExtArgs>>
    ): Prisma__client_scopeClient<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_scopes.
     * @param {client_scopeDeleteManyArgs} args - Arguments to filter Client_scopes to delete.
     * @example
     * // Delete a few Client_scopes
     * const { count } = await prisma.client_scope.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_scopeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scopeDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_scopes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scopeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_scopes
     * const client_scope = await prisma.client_scope.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_scopeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_scopeUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_scope.
     * @param {client_scopeUpsertArgs} args - Arguments to update or create a Client_scope.
     * @example
     * // Update or create a Client_scope
     * const client_scope = await prisma.client_scope.upsert({
     *   create: {
     *     // ... data to create a Client_scope
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_scope we want to update
     *   }
     * })
    **/
    upsert<T extends client_scopeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_scopeUpsertArgs<ExtArgs>>
    ): Prisma__client_scopeClient<$Result.GetResult<$client_scopePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_scopes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scopeCountArgs} args - Arguments to filter Client_scopes to count.
     * @example
     * // Count the number of Client_scopes
     * const count = await prisma.client_scope.count({
     *   where: {
     *     // ... the filter for the Client_scopes we want to count
     *   }
     * })
    **/
    count<T extends client_scopeCountArgs>(
      args?: Subset<T, client_scopeCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_scopeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_scope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_scopeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Client_scopeAggregateArgs>(args: Subset<T, Client_scopeAggregateArgs>): PrismaPromise<GetClient_scopeAggregateType<T>>

    /**
     * Group by Client_scope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scopeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends client_scopeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_scopeGroupByArgs['orderBy'] }
        : { orderBy?: client_scopeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, client_scopeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_scopeGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_scope model
   */
  readonly fields: client_scopeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_scope.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_scopeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the client_scope model
   */ 
  interface client_scopeFieldRefs {
    readonly id: FieldRef<"client_scope", 'Int'>
    readonly domain: FieldRef<"client_scope", 'String'>
    readonly props: FieldRef<"client_scope", 'Json'>
    readonly groups: FieldRef<"client_scope", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_scope findUnique
   */
  export type client_scopeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * Filter, which client_scope to fetch.
     */
    where: client_scopeWhereUniqueInput
  }


  /**
   * client_scope findUniqueOrThrow
   */
  export type client_scopeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * Filter, which client_scope to fetch.
     */
    where: client_scopeWhereUniqueInput
  }


  /**
   * client_scope findFirst
   */
  export type client_scopeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * Filter, which client_scope to fetch.
     */
    where?: client_scopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scopes to fetch.
     */
    orderBy?: client_scopeOrderByWithRelationInput | client_scopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_scopes.
     */
    cursor?: client_scopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_scopes.
     */
    distinct?: Client_scopeScalarFieldEnum | Client_scopeScalarFieldEnum[]
  }


  /**
   * client_scope findFirstOrThrow
   */
  export type client_scopeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * Filter, which client_scope to fetch.
     */
    where?: client_scopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scopes to fetch.
     */
    orderBy?: client_scopeOrderByWithRelationInput | client_scopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_scopes.
     */
    cursor?: client_scopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_scopes.
     */
    distinct?: Client_scopeScalarFieldEnum | Client_scopeScalarFieldEnum[]
  }


  /**
   * client_scope findMany
   */
  export type client_scopeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * Filter, which client_scopes to fetch.
     */
    where?: client_scopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scopes to fetch.
     */
    orderBy?: client_scopeOrderByWithRelationInput | client_scopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_scopes.
     */
    cursor?: client_scopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scopes.
     */
    skip?: number
    distinct?: Client_scopeScalarFieldEnum | Client_scopeScalarFieldEnum[]
  }


  /**
   * client_scope create
   */
  export type client_scopeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * The data needed to create a client_scope.
     */
    data: XOR<client_scopeCreateInput, client_scopeUncheckedCreateInput>
  }


  /**
   * client_scope createMany
   */
  export type client_scopeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_scopes.
     */
    data: client_scopeCreateManyInput | client_scopeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_scope update
   */
  export type client_scopeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * The data needed to update a client_scope.
     */
    data: XOR<client_scopeUpdateInput, client_scopeUncheckedUpdateInput>
    /**
     * Choose, which client_scope to update.
     */
    where: client_scopeWhereUniqueInput
  }


  /**
   * client_scope updateMany
   */
  export type client_scopeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_scopes.
     */
    data: XOR<client_scopeUpdateManyMutationInput, client_scopeUncheckedUpdateManyInput>
    /**
     * Filter which client_scopes to update
     */
    where?: client_scopeWhereInput
  }


  /**
   * client_scope upsert
   */
  export type client_scopeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * The filter to search for the client_scope to update in case it exists.
     */
    where: client_scopeWhereUniqueInput
    /**
     * In case the client_scope found by the `where` argument doesn't exist, create a new client_scope with this data.
     */
    create: XOR<client_scopeCreateInput, client_scopeUncheckedCreateInput>
    /**
     * In case the client_scope was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_scopeUpdateInput, client_scopeUncheckedUpdateInput>
  }


  /**
   * client_scope delete
   */
  export type client_scopeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
    /**
     * Filter which client_scope to delete.
     */
    where: client_scopeWhereUniqueInput
  }


  /**
   * client_scope deleteMany
   */
  export type client_scopeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_scopes to delete
     */
    where?: client_scopeWhereInput
  }


  /**
   * client_scope without action
   */
  export type client_scopeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope
     */
    select?: client_scopeSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_scopeWhereInput = {
    AND?: client_scopeWhereInput | client_scopeWhereInput[]
    OR?: client_scopeWhereInput[]
    NOT?: client_scopeWhereInput | client_scopeWhereInput[]
    id?: IntFilter<"client_scope"> | number
    domain?: StringFilter<"client_scope"> | string
    props?: JsonFilter<"client_scope">
    groups?: JsonFilter<"client_scope">
  }

  export type client_scopeOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_scopeWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_scopeWhereInput | client_scopeWhereInput[]
    OR?: client_scopeWhereInput[]
    NOT?: client_scopeWhereInput | client_scopeWhereInput[]
    props?: JsonFilter<"client_scope">
    groups?: JsonFilter<"client_scope">
  }, "id" | "domain">

  export type client_scopeOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_scopeCountOrderByAggregateInput
    _avg?: client_scopeAvgOrderByAggregateInput
    _max?: client_scopeMaxOrderByAggregateInput
    _min?: client_scopeMinOrderByAggregateInput
    _sum?: client_scopeSumOrderByAggregateInput
  }

  export type client_scopeScalarWhereWithAggregatesInput = {
    AND?: client_scopeScalarWhereWithAggregatesInput | client_scopeScalarWhereWithAggregatesInput[]
    OR?: client_scopeScalarWhereWithAggregatesInput[]
    NOT?: client_scopeScalarWhereWithAggregatesInput | client_scopeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_scope"> | number
    domain?: StringWithAggregatesFilter<"client_scope"> | string
    props?: JsonWithAggregatesFilter<"client_scope">
    groups?: JsonWithAggregatesFilter<"client_scope">
  }

  export type client_scopeCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scopeUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scopeUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scopeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scopeCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scopeUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scopeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scopeCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_scopeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_scopeMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_scopeMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_scopeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_scopeDefaultArgs instead
     */
    export type client_scopeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_scopeDefaultArgs<ExtArgs>

    export const Client_scopeScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_scopeScalarFieldEnum = (typeof Client_scopeScalarFieldEnum)[keyof typeof Client_scopeScalarFieldEnum]
    