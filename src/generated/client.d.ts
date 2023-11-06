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

export type client = $Result.DefaultSelection<$clientPayload>


/**
   * Model client
   */

export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client to aggregate.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
    orderBy?: clientOrderByWithAggregationInput | clientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends clientGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client"]>

  export type clientSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client"]>
    composites: {}
  }


  type clientGetPayload<S extends boolean | null | undefined | clientDefaultArgs> = $Result.GetResult<$clientPayload, S>

  type clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clientFindManyArgs, 'select' | 'include'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client'], meta: { name: 'client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {clientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clientFindUniqueArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<$clientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<$clientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindFirstArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<$clientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<$clientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends clientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$clientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client.
     * @param {clientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends clientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clientCreateArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<$clientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     *     @param {clientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {clientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends clientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clientDeleteArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<$clientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client.
     * @param {clientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpdateArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<$clientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {clientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {clientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends clientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpsertArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<$clientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientCountArgs>(
      args?: Subset<T, clientCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientGroupByArgs} args - Group by arguments.
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
      T extends clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientGroupByArgs['orderBy'] }
        : { orderBy?: clientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client model
   */
  readonly fields: clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client model
   */ 
  interface clientFieldRefs {
    readonly id: FieldRef<"client", 'Int'>
    readonly domain: FieldRef<"client", 'String'>
    readonly props: FieldRef<"client", 'Json'>
    readonly groups: FieldRef<"client", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client findUnique
   */
  export type clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }


  /**
   * client findUniqueOrThrow
   */
  export type clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }


  /**
   * client findFirst
   */
  export type clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * client findFirstOrThrow
   */
  export type clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * client findMany
   */
  export type clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * client create
   */
  export type clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * The data needed to create a client.
     */
    data: XOR<clientCreateInput, clientUncheckedCreateInput>
  }


  /**
   * client createMany
   */
  export type clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client update
   */
  export type clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * The data needed to update a client.
     */
    data: XOR<clientUpdateInput, clientUncheckedUpdateInput>
    /**
     * Choose, which client to update.
     */
    where: clientWhereUniqueInput
  }


  /**
   * client updateMany
   */
  export type clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput
  }


  /**
   * client upsert
   */
  export type clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * The filter to search for the client to update in case it exists.
     */
    where: clientWhereUniqueInput
    /**
     * In case the client found by the `where` argument doesn't exist, create a new client with this data.
     */
    create: XOR<clientCreateInput, clientUncheckedCreateInput>
    /**
     * In case the client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientUpdateInput, clientUncheckedUpdateInput>
  }


  /**
   * client delete
   */
  export type clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Filter which client to delete.
     */
    where: clientWhereUniqueInput
  }


  /**
   * client deleteMany
   */
  export type clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientWhereInput
  }


  /**
   * client without action
   */
  export type clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type clientWhereInput = {
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    id?: IntFilter<"client"> | number
    domain?: StringFilter<"client"> | string
    props?: JsonFilter<"client">
    groups?: JsonFilter<"client">
  }

  export type clientOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type clientWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    props?: JsonFilter<"client">
    groups?: JsonFilter<"client">
  }, "id" | "domain">

  export type clientOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: clientCountOrderByAggregateInput
    _avg?: clientAvgOrderByAggregateInput
    _max?: clientMaxOrderByAggregateInput
    _min?: clientMinOrderByAggregateInput
    _sum?: clientSumOrderByAggregateInput
  }

  export type clientScalarWhereWithAggregatesInput = {
    AND?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    OR?: clientScalarWhereWithAggregatesInput[]
    NOT?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client"> | number
    domain?: StringWithAggregatesFilter<"client"> | string
    props?: JsonWithAggregatesFilter<"client">
    groups?: JsonWithAggregatesFilter<"client">
  }

  export type clientCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type clientUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type clientUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type clientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type clientCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type clientUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type clientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type clientCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type clientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type clientMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type clientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use clientDefaultArgs instead
     */
    export type clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clientDefaultArgs<ExtArgs>

    export const ClientScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]
    