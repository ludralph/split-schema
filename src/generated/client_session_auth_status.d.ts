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

export type client_session_auth_status = $Result.DefaultSelection<$client_session_auth_statusPayload>


/**
   * Model client_session_auth_status
   */

export type AggregateClient_session_auth_status = {
    _count: Client_session_auth_statusCountAggregateOutputType | null
    _avg: Client_session_auth_statusAvgAggregateOutputType | null
    _sum: Client_session_auth_statusSumAggregateOutputType | null
    _min: Client_session_auth_statusMinAggregateOutputType | null
    _max: Client_session_auth_statusMaxAggregateOutputType | null
  }

  export type Client_session_auth_statusAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_session_auth_statusSumAggregateOutputType = {
    id: number | null
  }

  export type Client_session_auth_statusMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_session_auth_statusMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_session_auth_statusCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_session_auth_statusAvgAggregateInputType = {
    id?: true
  }

  export type Client_session_auth_statusSumAggregateInputType = {
    id?: true
  }

  export type Client_session_auth_statusMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_session_auth_statusMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_session_auth_statusCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_session_auth_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_session_auth_status to aggregate.
     */
    where?: client_session_auth_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_auth_statuss to fetch.
     */
    orderBy?: client_session_auth_statusOrderByWithRelationInput | client_session_auth_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_session_auth_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_auth_statuss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_auth_statuss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_session_auth_statuss
    **/
    _count?: true | Client_session_auth_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_session_auth_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_session_auth_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_session_auth_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_session_auth_statusMaxAggregateInputType
  }

  export type GetClient_session_auth_statusAggregateType<T extends Client_session_auth_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_session_auth_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_session_auth_status[P]>
      : GetScalarType<T[P], AggregateClient_session_auth_status[P]>
  }




  export type client_session_auth_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_session_auth_statusWhereInput
    orderBy?: client_session_auth_statusOrderByWithAggregationInput | client_session_auth_statusOrderByWithAggregationInput[]
    by: Client_session_auth_statusScalarFieldEnum[] | Client_session_auth_statusScalarFieldEnum
    having?: client_session_auth_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_session_auth_statusCountAggregateInputType | true
    _avg?: Client_session_auth_statusAvgAggregateInputType
    _sum?: Client_session_auth_statusSumAggregateInputType
    _min?: Client_session_auth_statusMinAggregateInputType
    _max?: Client_session_auth_statusMaxAggregateInputType
  }

  export type Client_session_auth_statusGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_session_auth_statusCountAggregateOutputType | null
    _avg: Client_session_auth_statusAvgAggregateOutputType | null
    _sum: Client_session_auth_statusSumAggregateOutputType | null
    _min: Client_session_auth_statusMinAggregateOutputType | null
    _max: Client_session_auth_statusMaxAggregateOutputType | null
  }

  type GetClient_session_auth_statusGroupByPayload<T extends client_session_auth_statusGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_session_auth_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_session_auth_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_session_auth_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Client_session_auth_statusGroupByOutputType[P]>
        }
      >
    >


  export type client_session_auth_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_session_auth_status"]>

  export type client_session_auth_statusSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_session_auth_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_session_auth_status"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_session_auth_status"]>
    composites: {}
  }


  type client_session_auth_statusGetPayload<S extends boolean | null | undefined | client_session_auth_statusDefaultArgs> = $Result.GetResult<$client_session_auth_statusPayload, S>

  type client_session_auth_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_session_auth_statusFindManyArgs, 'select' | 'include'> & {
      select?: Client_session_auth_statusCountAggregateInputType | true
    }

  export interface client_session_auth_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_session_auth_status'], meta: { name: 'client_session_auth_status' } }
    /**
     * Find zero or one Client_session_auth_status that matches the filter.
     * @param {client_session_auth_statusFindUniqueArgs} args - Arguments to find a Client_session_auth_status
     * @example
     * // Get one Client_session_auth_status
     * const client_session_auth_status = await prisma.client_session_auth_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_session_auth_statusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_auth_statusFindUniqueArgs<ExtArgs>>
    ): Prisma__client_session_auth_statusClient<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_session_auth_status that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_session_auth_statusFindUniqueOrThrowArgs} args - Arguments to find a Client_session_auth_status
     * @example
     * // Get one Client_session_auth_status
     * const client_session_auth_status = await prisma.client_session_auth_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_session_auth_statusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_auth_statusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_session_auth_statusClient<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_session_auth_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_auth_statusFindFirstArgs} args - Arguments to find a Client_session_auth_status
     * @example
     * // Get one Client_session_auth_status
     * const client_session_auth_status = await prisma.client_session_auth_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_session_auth_statusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_auth_statusFindFirstArgs<ExtArgs>>
    ): Prisma__client_session_auth_statusClient<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_session_auth_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_auth_statusFindFirstOrThrowArgs} args - Arguments to find a Client_session_auth_status
     * @example
     * // Get one Client_session_auth_status
     * const client_session_auth_status = await prisma.client_session_auth_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_session_auth_statusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_auth_statusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_session_auth_statusClient<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_session_auth_statuss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_auth_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_session_auth_statuss
     * const client_session_auth_statuss = await prisma.client_session_auth_status.findMany()
     * 
     * // Get first 10 Client_session_auth_statuss
     * const client_session_auth_statuss = await prisma.client_session_auth_status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_session_auth_statusWithIdOnly = await prisma.client_session_auth_status.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_session_auth_statusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_auth_statusFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_session_auth_status.
     * @param {client_session_auth_statusCreateArgs} args - Arguments to create a Client_session_auth_status.
     * @example
     * // Create one Client_session_auth_status
     * const Client_session_auth_status = await prisma.client_session_auth_status.create({
     *   data: {
     *     // ... data to create a Client_session_auth_status
     *   }
     * })
     * 
    **/
    create<T extends client_session_auth_statusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_auth_statusCreateArgs<ExtArgs>>
    ): Prisma__client_session_auth_statusClient<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_session_auth_statuss.
     *     @param {client_session_auth_statusCreateManyArgs} args - Arguments to create many Client_session_auth_statuss.
     *     @example
     *     // Create many Client_session_auth_statuss
     *     const client_session_auth_status = await prisma.client_session_auth_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_session_auth_statusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_auth_statusCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_session_auth_status.
     * @param {client_session_auth_statusDeleteArgs} args - Arguments to delete one Client_session_auth_status.
     * @example
     * // Delete one Client_session_auth_status
     * const Client_session_auth_status = await prisma.client_session_auth_status.delete({
     *   where: {
     *     // ... filter to delete one Client_session_auth_status
     *   }
     * })
     * 
    **/
    delete<T extends client_session_auth_statusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_auth_statusDeleteArgs<ExtArgs>>
    ): Prisma__client_session_auth_statusClient<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_session_auth_status.
     * @param {client_session_auth_statusUpdateArgs} args - Arguments to update one Client_session_auth_status.
     * @example
     * // Update one Client_session_auth_status
     * const client_session_auth_status = await prisma.client_session_auth_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_session_auth_statusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_auth_statusUpdateArgs<ExtArgs>>
    ): Prisma__client_session_auth_statusClient<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_session_auth_statuss.
     * @param {client_session_auth_statusDeleteManyArgs} args - Arguments to filter Client_session_auth_statuss to delete.
     * @example
     * // Delete a few Client_session_auth_statuss
     * const { count } = await prisma.client_session_auth_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_session_auth_statusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_auth_statusDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_session_auth_statuss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_auth_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_session_auth_statuss
     * const client_session_auth_status = await prisma.client_session_auth_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_session_auth_statusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_auth_statusUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_session_auth_status.
     * @param {client_session_auth_statusUpsertArgs} args - Arguments to update or create a Client_session_auth_status.
     * @example
     * // Update or create a Client_session_auth_status
     * const client_session_auth_status = await prisma.client_session_auth_status.upsert({
     *   create: {
     *     // ... data to create a Client_session_auth_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_session_auth_status we want to update
     *   }
     * })
    **/
    upsert<T extends client_session_auth_statusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_auth_statusUpsertArgs<ExtArgs>>
    ): Prisma__client_session_auth_statusClient<$Result.GetResult<$client_session_auth_statusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_session_auth_statuss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_auth_statusCountArgs} args - Arguments to filter Client_session_auth_statuss to count.
     * @example
     * // Count the number of Client_session_auth_statuss
     * const count = await prisma.client_session_auth_status.count({
     *   where: {
     *     // ... the filter for the Client_session_auth_statuss we want to count
     *   }
     * })
    **/
    count<T extends client_session_auth_statusCountArgs>(
      args?: Subset<T, client_session_auth_statusCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_session_auth_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_session_auth_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_session_auth_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_session_auth_statusAggregateArgs>(args: Subset<T, Client_session_auth_statusAggregateArgs>): PrismaPromise<GetClient_session_auth_statusAggregateType<T>>

    /**
     * Group by Client_session_auth_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_auth_statusGroupByArgs} args - Group by arguments.
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
      T extends client_session_auth_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_session_auth_statusGroupByArgs['orderBy'] }
        : { orderBy?: client_session_auth_statusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_session_auth_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_session_auth_statusGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_session_auth_status model
   */
  readonly fields: client_session_auth_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_session_auth_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_session_auth_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_session_auth_status model
   */ 
  interface client_session_auth_statusFieldRefs {
    readonly id: FieldRef<"client_session_auth_status", 'Int'>
    readonly domain: FieldRef<"client_session_auth_status", 'String'>
    readonly props: FieldRef<"client_session_auth_status", 'Json'>
    readonly groups: FieldRef<"client_session_auth_status", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_session_auth_status findUnique
   */
  export type client_session_auth_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * Filter, which client_session_auth_status to fetch.
     */
    where: client_session_auth_statusWhereUniqueInput
  }


  /**
   * client_session_auth_status findUniqueOrThrow
   */
  export type client_session_auth_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * Filter, which client_session_auth_status to fetch.
     */
    where: client_session_auth_statusWhereUniqueInput
  }


  /**
   * client_session_auth_status findFirst
   */
  export type client_session_auth_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * Filter, which client_session_auth_status to fetch.
     */
    where?: client_session_auth_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_auth_statuss to fetch.
     */
    orderBy?: client_session_auth_statusOrderByWithRelationInput | client_session_auth_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_session_auth_statuss.
     */
    cursor?: client_session_auth_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_auth_statuss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_auth_statuss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_session_auth_statuss.
     */
    distinct?: Client_session_auth_statusScalarFieldEnum | Client_session_auth_statusScalarFieldEnum[]
  }


  /**
   * client_session_auth_status findFirstOrThrow
   */
  export type client_session_auth_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * Filter, which client_session_auth_status to fetch.
     */
    where?: client_session_auth_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_auth_statuss to fetch.
     */
    orderBy?: client_session_auth_statusOrderByWithRelationInput | client_session_auth_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_session_auth_statuss.
     */
    cursor?: client_session_auth_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_auth_statuss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_auth_statuss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_session_auth_statuss.
     */
    distinct?: Client_session_auth_statusScalarFieldEnum | Client_session_auth_statusScalarFieldEnum[]
  }


  /**
   * client_session_auth_status findMany
   */
  export type client_session_auth_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * Filter, which client_session_auth_statuss to fetch.
     */
    where?: client_session_auth_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_auth_statuss to fetch.
     */
    orderBy?: client_session_auth_statusOrderByWithRelationInput | client_session_auth_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_session_auth_statuss.
     */
    cursor?: client_session_auth_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_auth_statuss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_auth_statuss.
     */
    skip?: number
    distinct?: Client_session_auth_statusScalarFieldEnum | Client_session_auth_statusScalarFieldEnum[]
  }


  /**
   * client_session_auth_status create
   */
  export type client_session_auth_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * The data needed to create a client_session_auth_status.
     */
    data: XOR<client_session_auth_statusCreateInput, client_session_auth_statusUncheckedCreateInput>
  }


  /**
   * client_session_auth_status createMany
   */
  export type client_session_auth_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_session_auth_statuss.
     */
    data: client_session_auth_statusCreateManyInput | client_session_auth_statusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_session_auth_status update
   */
  export type client_session_auth_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * The data needed to update a client_session_auth_status.
     */
    data: XOR<client_session_auth_statusUpdateInput, client_session_auth_statusUncheckedUpdateInput>
    /**
     * Choose, which client_session_auth_status to update.
     */
    where: client_session_auth_statusWhereUniqueInput
  }


  /**
   * client_session_auth_status updateMany
   */
  export type client_session_auth_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_session_auth_statuss.
     */
    data: XOR<client_session_auth_statusUpdateManyMutationInput, client_session_auth_statusUncheckedUpdateManyInput>
    /**
     * Filter which client_session_auth_statuss to update
     */
    where?: client_session_auth_statusWhereInput
  }


  /**
   * client_session_auth_status upsert
   */
  export type client_session_auth_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * The filter to search for the client_session_auth_status to update in case it exists.
     */
    where: client_session_auth_statusWhereUniqueInput
    /**
     * In case the client_session_auth_status found by the `where` argument doesn't exist, create a new client_session_auth_status with this data.
     */
    create: XOR<client_session_auth_statusCreateInput, client_session_auth_statusUncheckedCreateInput>
    /**
     * In case the client_session_auth_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_session_auth_statusUpdateInput, client_session_auth_statusUncheckedUpdateInput>
  }


  /**
   * client_session_auth_status delete
   */
  export type client_session_auth_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
    /**
     * Filter which client_session_auth_status to delete.
     */
    where: client_session_auth_statusWhereUniqueInput
  }


  /**
   * client_session_auth_status deleteMany
   */
  export type client_session_auth_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_session_auth_statuss to delete
     */
    where?: client_session_auth_statusWhereInput
  }


  /**
   * client_session_auth_status without action
   */
  export type client_session_auth_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_auth_status
     */
    select?: client_session_auth_statusSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_session_auth_statusWhereInput = {
    AND?: client_session_auth_statusWhereInput | client_session_auth_statusWhereInput[]
    OR?: client_session_auth_statusWhereInput[]
    NOT?: client_session_auth_statusWhereInput | client_session_auth_statusWhereInput[]
    id?: IntFilter<"client_session_auth_status"> | number
    domain?: StringFilter<"client_session_auth_status"> | string
    props?: JsonFilter<"client_session_auth_status">
    groups?: JsonFilter<"client_session_auth_status">
  }

  export type client_session_auth_statusOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_session_auth_statusWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_session_auth_statusWhereInput | client_session_auth_statusWhereInput[]
    OR?: client_session_auth_statusWhereInput[]
    NOT?: client_session_auth_statusWhereInput | client_session_auth_statusWhereInput[]
    props?: JsonFilter<"client_session_auth_status">
    groups?: JsonFilter<"client_session_auth_status">
  }, "id" | "domain">

  export type client_session_auth_statusOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_session_auth_statusCountOrderByAggregateInput
    _avg?: client_session_auth_statusAvgOrderByAggregateInput
    _max?: client_session_auth_statusMaxOrderByAggregateInput
    _min?: client_session_auth_statusMinOrderByAggregateInput
    _sum?: client_session_auth_statusSumOrderByAggregateInput
  }

  export type client_session_auth_statusScalarWhereWithAggregatesInput = {
    AND?: client_session_auth_statusScalarWhereWithAggregatesInput | client_session_auth_statusScalarWhereWithAggregatesInput[]
    OR?: client_session_auth_statusScalarWhereWithAggregatesInput[]
    NOT?: client_session_auth_statusScalarWhereWithAggregatesInput | client_session_auth_statusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_session_auth_status"> | number
    domain?: StringWithAggregatesFilter<"client_session_auth_status"> | string
    props?: JsonWithAggregatesFilter<"client_session_auth_status">
    groups?: JsonWithAggregatesFilter<"client_session_auth_status">
  }

  export type client_session_auth_statusCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_auth_statusUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_auth_statusUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_auth_statusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_auth_statusCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_auth_statusUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_auth_statusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_auth_statusCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_session_auth_statusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_session_auth_statusMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_session_auth_statusMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_session_auth_statusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_session_auth_statusDefaultArgs instead
     */
    export type client_session_auth_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_session_auth_statusDefaultArgs<ExtArgs>

    export const Client_session_auth_statusScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_session_auth_statusScalarFieldEnum = (typeof Client_session_auth_statusScalarFieldEnum)[keyof typeof Client_session_auth_statusScalarFieldEnum]
    