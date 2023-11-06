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

export type client_scope_client = $Result.DefaultSelection<$client_scope_clientPayload>


/**
   * Model client_scope_client
   */

export type AggregateClient_scope_client = {
    _count: Client_scope_clientCountAggregateOutputType | null
    _avg: Client_scope_clientAvgAggregateOutputType | null
    _sum: Client_scope_clientSumAggregateOutputType | null
    _min: Client_scope_clientMinAggregateOutputType | null
    _max: Client_scope_clientMaxAggregateOutputType | null
  }

  export type Client_scope_clientAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_scope_clientSumAggregateOutputType = {
    id: number | null
  }

  export type Client_scope_clientMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_scope_clientMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_scope_clientCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_scope_clientAvgAggregateInputType = {
    id?: true
  }

  export type Client_scope_clientSumAggregateInputType = {
    id?: true
  }

  export type Client_scope_clientMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_scope_clientMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_scope_clientCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_scope_clientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_scope_client to aggregate.
     */
    where?: client_scope_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_clients to fetch.
     */
    orderBy?: client_scope_clientOrderByWithRelationInput | client_scope_clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_scope_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_scope_clients
    **/
    _count?: true | Client_scope_clientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_scope_clientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_scope_clientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_scope_clientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_scope_clientMaxAggregateInputType
  }

  export type GetClient_scope_clientAggregateType<T extends Client_scope_clientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_scope_client]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_scope_client[P]>
      : GetScalarType<T[P], AggregateClient_scope_client[P]>
  }




  export type client_scope_clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_scope_clientWhereInput
    orderBy?: client_scope_clientOrderByWithAggregationInput | client_scope_clientOrderByWithAggregationInput[]
    by: Client_scope_clientScalarFieldEnum[] | Client_scope_clientScalarFieldEnum
    having?: client_scope_clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_scope_clientCountAggregateInputType | true
    _avg?: Client_scope_clientAvgAggregateInputType
    _sum?: Client_scope_clientSumAggregateInputType
    _min?: Client_scope_clientMinAggregateInputType
    _max?: Client_scope_clientMaxAggregateInputType
  }

  export type Client_scope_clientGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_scope_clientCountAggregateOutputType | null
    _avg: Client_scope_clientAvgAggregateOutputType | null
    _sum: Client_scope_clientSumAggregateOutputType | null
    _min: Client_scope_clientMinAggregateOutputType | null
    _max: Client_scope_clientMaxAggregateOutputType | null
  }

  type GetClient_scope_clientGroupByPayload<T extends client_scope_clientGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_scope_clientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_scope_clientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_scope_clientGroupByOutputType[P]>
            : GetScalarType<T[P], Client_scope_clientGroupByOutputType[P]>
        }
      >
    >


  export type client_scope_clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_scope_client"]>

  export type client_scope_clientSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_scope_clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_scope_client"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_scope_client"]>
    composites: {}
  }


  type client_scope_clientGetPayload<S extends boolean | null | undefined | client_scope_clientDefaultArgs> = $Result.GetResult<$client_scope_clientPayload, S>

  type client_scope_clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_scope_clientFindManyArgs, 'select' | 'include'> & {
      select?: Client_scope_clientCountAggregateInputType | true
    }

  export interface client_scope_clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_scope_client'], meta: { name: 'client_scope_client' } }
    /**
     * Find zero or one Client_scope_client that matches the filter.
     * @param {client_scope_clientFindUniqueArgs} args - Arguments to find a Client_scope_client
     * @example
     * // Get one Client_scope_client
     * const client_scope_client = await prisma.client_scope_client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_scope_clientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_clientFindUniqueArgs<ExtArgs>>
    ): Prisma__client_scope_clientClient<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_scope_client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_scope_clientFindUniqueOrThrowArgs} args - Arguments to find a Client_scope_client
     * @example
     * // Get one Client_scope_client
     * const client_scope_client = await prisma.client_scope_client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_scope_clientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_clientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_scope_clientClient<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_scope_client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_clientFindFirstArgs} args - Arguments to find a Client_scope_client
     * @example
     * // Get one Client_scope_client
     * const client_scope_client = await prisma.client_scope_client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_scope_clientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_clientFindFirstArgs<ExtArgs>>
    ): Prisma__client_scope_clientClient<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_scope_client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_clientFindFirstOrThrowArgs} args - Arguments to find a Client_scope_client
     * @example
     * // Get one Client_scope_client
     * const client_scope_client = await prisma.client_scope_client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_scope_clientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_clientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_scope_clientClient<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_scope_clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_clientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_scope_clients
     * const client_scope_clients = await prisma.client_scope_client.findMany()
     * 
     * // Get first 10 Client_scope_clients
     * const client_scope_clients = await prisma.client_scope_client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_scope_clientWithIdOnly = await prisma.client_scope_client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_scope_clientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_clientFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_scope_client.
     * @param {client_scope_clientCreateArgs} args - Arguments to create a Client_scope_client.
     * @example
     * // Create one Client_scope_client
     * const Client_scope_client = await prisma.client_scope_client.create({
     *   data: {
     *     // ... data to create a Client_scope_client
     *   }
     * })
     * 
    **/
    create<T extends client_scope_clientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_clientCreateArgs<ExtArgs>>
    ): Prisma__client_scope_clientClient<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_scope_clients.
     *     @param {client_scope_clientCreateManyArgs} args - Arguments to create many Client_scope_clients.
     *     @example
     *     // Create many Client_scope_clients
     *     const client_scope_client = await prisma.client_scope_client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_scope_clientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_clientCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_scope_client.
     * @param {client_scope_clientDeleteArgs} args - Arguments to delete one Client_scope_client.
     * @example
     * // Delete one Client_scope_client
     * const Client_scope_client = await prisma.client_scope_client.delete({
     *   where: {
     *     // ... filter to delete one Client_scope_client
     *   }
     * })
     * 
    **/
    delete<T extends client_scope_clientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_clientDeleteArgs<ExtArgs>>
    ): Prisma__client_scope_clientClient<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_scope_client.
     * @param {client_scope_clientUpdateArgs} args - Arguments to update one Client_scope_client.
     * @example
     * // Update one Client_scope_client
     * const client_scope_client = await prisma.client_scope_client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_scope_clientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_clientUpdateArgs<ExtArgs>>
    ): Prisma__client_scope_clientClient<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_scope_clients.
     * @param {client_scope_clientDeleteManyArgs} args - Arguments to filter Client_scope_clients to delete.
     * @example
     * // Delete a few Client_scope_clients
     * const { count } = await prisma.client_scope_client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_scope_clientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_clientDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_scope_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_scope_clients
     * const client_scope_client = await prisma.client_scope_client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_scope_clientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_clientUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_scope_client.
     * @param {client_scope_clientUpsertArgs} args - Arguments to update or create a Client_scope_client.
     * @example
     * // Update or create a Client_scope_client
     * const client_scope_client = await prisma.client_scope_client.upsert({
     *   create: {
     *     // ... data to create a Client_scope_client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_scope_client we want to update
     *   }
     * })
    **/
    upsert<T extends client_scope_clientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_clientUpsertArgs<ExtArgs>>
    ): Prisma__client_scope_clientClient<$Result.GetResult<$client_scope_clientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_scope_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_clientCountArgs} args - Arguments to filter Client_scope_clients to count.
     * @example
     * // Count the number of Client_scope_clients
     * const count = await prisma.client_scope_client.count({
     *   where: {
     *     // ... the filter for the Client_scope_clients we want to count
     *   }
     * })
    **/
    count<T extends client_scope_clientCountArgs>(
      args?: Subset<T, client_scope_clientCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_scope_clientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_scope_client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_scope_clientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_scope_clientAggregateArgs>(args: Subset<T, Client_scope_clientAggregateArgs>): PrismaPromise<GetClient_scope_clientAggregateType<T>>

    /**
     * Group by Client_scope_client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_clientGroupByArgs} args - Group by arguments.
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
      T extends client_scope_clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_scope_clientGroupByArgs['orderBy'] }
        : { orderBy?: client_scope_clientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_scope_clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_scope_clientGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_scope_client model
   */
  readonly fields: client_scope_clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_scope_client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_scope_clientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_scope_client model
   */ 
  interface client_scope_clientFieldRefs {
    readonly id: FieldRef<"client_scope_client", 'Int'>
    readonly domain: FieldRef<"client_scope_client", 'String'>
    readonly props: FieldRef<"client_scope_client", 'Json'>
    readonly groups: FieldRef<"client_scope_client", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_scope_client findUnique
   */
  export type client_scope_clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_client to fetch.
     */
    where: client_scope_clientWhereUniqueInput
  }


  /**
   * client_scope_client findUniqueOrThrow
   */
  export type client_scope_clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_client to fetch.
     */
    where: client_scope_clientWhereUniqueInput
  }


  /**
   * client_scope_client findFirst
   */
  export type client_scope_clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_client to fetch.
     */
    where?: client_scope_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_clients to fetch.
     */
    orderBy?: client_scope_clientOrderByWithRelationInput | client_scope_clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_scope_clients.
     */
    cursor?: client_scope_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_scope_clients.
     */
    distinct?: Client_scope_clientScalarFieldEnum | Client_scope_clientScalarFieldEnum[]
  }


  /**
   * client_scope_client findFirstOrThrow
   */
  export type client_scope_clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_client to fetch.
     */
    where?: client_scope_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_clients to fetch.
     */
    orderBy?: client_scope_clientOrderByWithRelationInput | client_scope_clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_scope_clients.
     */
    cursor?: client_scope_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_scope_clients.
     */
    distinct?: Client_scope_clientScalarFieldEnum | Client_scope_clientScalarFieldEnum[]
  }


  /**
   * client_scope_client findMany
   */
  export type client_scope_clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_clients to fetch.
     */
    where?: client_scope_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_clients to fetch.
     */
    orderBy?: client_scope_clientOrderByWithRelationInput | client_scope_clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_scope_clients.
     */
    cursor?: client_scope_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_clients.
     */
    skip?: number
    distinct?: Client_scope_clientScalarFieldEnum | Client_scope_clientScalarFieldEnum[]
  }


  /**
   * client_scope_client create
   */
  export type client_scope_clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * The data needed to create a client_scope_client.
     */
    data: XOR<client_scope_clientCreateInput, client_scope_clientUncheckedCreateInput>
  }


  /**
   * client_scope_client createMany
   */
  export type client_scope_clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_scope_clients.
     */
    data: client_scope_clientCreateManyInput | client_scope_clientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_scope_client update
   */
  export type client_scope_clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * The data needed to update a client_scope_client.
     */
    data: XOR<client_scope_clientUpdateInput, client_scope_clientUncheckedUpdateInput>
    /**
     * Choose, which client_scope_client to update.
     */
    where: client_scope_clientWhereUniqueInput
  }


  /**
   * client_scope_client updateMany
   */
  export type client_scope_clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_scope_clients.
     */
    data: XOR<client_scope_clientUpdateManyMutationInput, client_scope_clientUncheckedUpdateManyInput>
    /**
     * Filter which client_scope_clients to update
     */
    where?: client_scope_clientWhereInput
  }


  /**
   * client_scope_client upsert
   */
  export type client_scope_clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * The filter to search for the client_scope_client to update in case it exists.
     */
    where: client_scope_clientWhereUniqueInput
    /**
     * In case the client_scope_client found by the `where` argument doesn't exist, create a new client_scope_client with this data.
     */
    create: XOR<client_scope_clientCreateInput, client_scope_clientUncheckedCreateInput>
    /**
     * In case the client_scope_client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_scope_clientUpdateInput, client_scope_clientUncheckedUpdateInput>
  }


  /**
   * client_scope_client delete
   */
  export type client_scope_clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
    /**
     * Filter which client_scope_client to delete.
     */
    where: client_scope_clientWhereUniqueInput
  }


  /**
   * client_scope_client deleteMany
   */
  export type client_scope_clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_scope_clients to delete
     */
    where?: client_scope_clientWhereInput
  }


  /**
   * client_scope_client without action
   */
  export type client_scope_clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_client
     */
    select?: client_scope_clientSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_scope_clientWhereInput = {
    AND?: client_scope_clientWhereInput | client_scope_clientWhereInput[]
    OR?: client_scope_clientWhereInput[]
    NOT?: client_scope_clientWhereInput | client_scope_clientWhereInput[]
    id?: IntFilter<"client_scope_client"> | number
    domain?: StringFilter<"client_scope_client"> | string
    props?: JsonFilter<"client_scope_client">
    groups?: JsonFilter<"client_scope_client">
  }

  export type client_scope_clientOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_scope_clientWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_scope_clientWhereInput | client_scope_clientWhereInput[]
    OR?: client_scope_clientWhereInput[]
    NOT?: client_scope_clientWhereInput | client_scope_clientWhereInput[]
    props?: JsonFilter<"client_scope_client">
    groups?: JsonFilter<"client_scope_client">
  }, "id" | "domain">

  export type client_scope_clientOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_scope_clientCountOrderByAggregateInput
    _avg?: client_scope_clientAvgOrderByAggregateInput
    _max?: client_scope_clientMaxOrderByAggregateInput
    _min?: client_scope_clientMinOrderByAggregateInput
    _sum?: client_scope_clientSumOrderByAggregateInput
  }

  export type client_scope_clientScalarWhereWithAggregatesInput = {
    AND?: client_scope_clientScalarWhereWithAggregatesInput | client_scope_clientScalarWhereWithAggregatesInput[]
    OR?: client_scope_clientScalarWhereWithAggregatesInput[]
    NOT?: client_scope_clientScalarWhereWithAggregatesInput | client_scope_clientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_scope_client"> | number
    domain?: StringWithAggregatesFilter<"client_scope_client"> | string
    props?: JsonWithAggregatesFilter<"client_scope_client">
    groups?: JsonWithAggregatesFilter<"client_scope_client">
  }

  export type client_scope_clientCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_clientUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_clientUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_clientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_clientCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_clientUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_clientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_clientCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_scope_clientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_scope_clientMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_scope_clientMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_scope_clientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_scope_clientDefaultArgs instead
     */
    export type client_scope_clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_scope_clientDefaultArgs<ExtArgs>

    export const Client_scope_clientScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_scope_clientScalarFieldEnum = (typeof Client_scope_clientScalarFieldEnum)[keyof typeof Client_scope_clientScalarFieldEnum]
    