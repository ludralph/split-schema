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

export type client_session = $Result.DefaultSelection<$client_sessionPayload>


/**
   * Model client_session
   */

export type AggregateClient_session = {
    _count: Client_sessionCountAggregateOutputType | null
    _avg: Client_sessionAvgAggregateOutputType | null
    _sum: Client_sessionSumAggregateOutputType | null
    _min: Client_sessionMinAggregateOutputType | null
    _max: Client_sessionMaxAggregateOutputType | null
  }

  export type Client_sessionAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_sessionSumAggregateOutputType = {
    id: number | null
  }

  export type Client_sessionMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_sessionMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_sessionCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_sessionAvgAggregateInputType = {
    id?: true
  }

  export type Client_sessionSumAggregateInputType = {
    id?: true
  }

  export type Client_sessionMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_sessionMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_sessionCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_sessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_session to aggregate.
     */
    where?: client_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_sessions to fetch.
     */
    orderBy?: client_sessionOrderByWithRelationInput | client_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_sessions
    **/
    _count?: true | Client_sessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_sessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_sessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_sessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_sessionMaxAggregateInputType
  }

  export type GetClient_sessionAggregateType<T extends Client_sessionAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_session]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_session[P]>
      : GetScalarType<T[P], AggregateClient_session[P]>
  }




  export type client_sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_sessionWhereInput
    orderBy?: client_sessionOrderByWithAggregationInput | client_sessionOrderByWithAggregationInput[]
    by: Client_sessionScalarFieldEnum[] | Client_sessionScalarFieldEnum
    having?: client_sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_sessionCountAggregateInputType | true
    _avg?: Client_sessionAvgAggregateInputType
    _sum?: Client_sessionSumAggregateInputType
    _min?: Client_sessionMinAggregateInputType
    _max?: Client_sessionMaxAggregateInputType
  }

  export type Client_sessionGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_sessionCountAggregateOutputType | null
    _avg: Client_sessionAvgAggregateOutputType | null
    _sum: Client_sessionSumAggregateOutputType | null
    _min: Client_sessionMinAggregateOutputType | null
    _max: Client_sessionMaxAggregateOutputType | null
  }

  type GetClient_sessionGroupByPayload<T extends client_sessionGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_sessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_sessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_sessionGroupByOutputType[P]>
            : GetScalarType<T[P], Client_sessionGroupByOutputType[P]>
        }
      >
    >


  export type client_sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_session"]>

  export type client_sessionSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_session"]>
    composites: {}
  }


  type client_sessionGetPayload<S extends boolean | null | undefined | client_sessionDefaultArgs> = $Result.GetResult<$client_sessionPayload, S>

  type client_sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_sessionFindManyArgs, 'select' | 'include'> & {
      select?: Client_sessionCountAggregateInputType | true
    }

  export interface client_sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_session'], meta: { name: 'client_session' } }
    /**
     * Find zero or one Client_session that matches the filter.
     * @param {client_sessionFindUniqueArgs} args - Arguments to find a Client_session
     * @example
     * // Get one Client_session
     * const client_session = await prisma.client_session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_sessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_sessionFindUniqueArgs<ExtArgs>>
    ): Prisma__client_sessionClient<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_sessionFindUniqueOrThrowArgs} args - Arguments to find a Client_session
     * @example
     * // Get one Client_session
     * const client_session = await prisma.client_session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_sessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_sessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_sessionClient<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_sessionFindFirstArgs} args - Arguments to find a Client_session
     * @example
     * // Get one Client_session
     * const client_session = await prisma.client_session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_sessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_sessionFindFirstArgs<ExtArgs>>
    ): Prisma__client_sessionClient<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_sessionFindFirstOrThrowArgs} args - Arguments to find a Client_session
     * @example
     * // Get one Client_session
     * const client_session = await prisma.client_session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_sessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_sessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_sessionClient<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_sessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_sessions
     * const client_sessions = await prisma.client_session.findMany()
     * 
     * // Get first 10 Client_sessions
     * const client_sessions = await prisma.client_session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_sessionWithIdOnly = await prisma.client_session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_sessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_sessionFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_session.
     * @param {client_sessionCreateArgs} args - Arguments to create a Client_session.
     * @example
     * // Create one Client_session
     * const Client_session = await prisma.client_session.create({
     *   data: {
     *     // ... data to create a Client_session
     *   }
     * })
     * 
    **/
    create<T extends client_sessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_sessionCreateArgs<ExtArgs>>
    ): Prisma__client_sessionClient<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_sessions.
     *     @param {client_sessionCreateManyArgs} args - Arguments to create many Client_sessions.
     *     @example
     *     // Create many Client_sessions
     *     const client_session = await prisma.client_session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_sessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_sessionCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_session.
     * @param {client_sessionDeleteArgs} args - Arguments to delete one Client_session.
     * @example
     * // Delete one Client_session
     * const Client_session = await prisma.client_session.delete({
     *   where: {
     *     // ... filter to delete one Client_session
     *   }
     * })
     * 
    **/
    delete<T extends client_sessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_sessionDeleteArgs<ExtArgs>>
    ): Prisma__client_sessionClient<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_session.
     * @param {client_sessionUpdateArgs} args - Arguments to update one Client_session.
     * @example
     * // Update one Client_session
     * const client_session = await prisma.client_session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_sessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_sessionUpdateArgs<ExtArgs>>
    ): Prisma__client_sessionClient<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_sessions.
     * @param {client_sessionDeleteManyArgs} args - Arguments to filter Client_sessions to delete.
     * @example
     * // Delete a few Client_sessions
     * const { count } = await prisma.client_session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_sessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_sessionDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_sessions
     * const client_session = await prisma.client_session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_sessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_sessionUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_session.
     * @param {client_sessionUpsertArgs} args - Arguments to update or create a Client_session.
     * @example
     * // Update or create a Client_session
     * const client_session = await prisma.client_session.upsert({
     *   create: {
     *     // ... data to create a Client_session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_session we want to update
     *   }
     * })
    **/
    upsert<T extends client_sessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_sessionUpsertArgs<ExtArgs>>
    ): Prisma__client_sessionClient<$Result.GetResult<$client_sessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_sessionCountArgs} args - Arguments to filter Client_sessions to count.
     * @example
     * // Count the number of Client_sessions
     * const count = await prisma.client_session.count({
     *   where: {
     *     // ... the filter for the Client_sessions we want to count
     *   }
     * })
    **/
    count<T extends client_sessionCountArgs>(
      args?: Subset<T, client_sessionCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_sessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_sessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_sessionAggregateArgs>(args: Subset<T, Client_sessionAggregateArgs>): PrismaPromise<GetClient_sessionAggregateType<T>>

    /**
     * Group by Client_session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_sessionGroupByArgs} args - Group by arguments.
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
      T extends client_sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_sessionGroupByArgs['orderBy'] }
        : { orderBy?: client_sessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_sessionGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_session model
   */
  readonly fields: client_sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_session model
   */ 
  interface client_sessionFieldRefs {
    readonly id: FieldRef<"client_session", 'Int'>
    readonly domain: FieldRef<"client_session", 'String'>
    readonly props: FieldRef<"client_session", 'Json'>
    readonly groups: FieldRef<"client_session", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_session findUnique
   */
  export type client_sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * Filter, which client_session to fetch.
     */
    where: client_sessionWhereUniqueInput
  }


  /**
   * client_session findUniqueOrThrow
   */
  export type client_sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * Filter, which client_session to fetch.
     */
    where: client_sessionWhereUniqueInput
  }


  /**
   * client_session findFirst
   */
  export type client_sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * Filter, which client_session to fetch.
     */
    where?: client_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_sessions to fetch.
     */
    orderBy?: client_sessionOrderByWithRelationInput | client_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_sessions.
     */
    cursor?: client_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_sessions.
     */
    distinct?: Client_sessionScalarFieldEnum | Client_sessionScalarFieldEnum[]
  }


  /**
   * client_session findFirstOrThrow
   */
  export type client_sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * Filter, which client_session to fetch.
     */
    where?: client_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_sessions to fetch.
     */
    orderBy?: client_sessionOrderByWithRelationInput | client_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_sessions.
     */
    cursor?: client_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_sessions.
     */
    distinct?: Client_sessionScalarFieldEnum | Client_sessionScalarFieldEnum[]
  }


  /**
   * client_session findMany
   */
  export type client_sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * Filter, which client_sessions to fetch.
     */
    where?: client_sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_sessions to fetch.
     */
    orderBy?: client_sessionOrderByWithRelationInput | client_sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_sessions.
     */
    cursor?: client_sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_sessions.
     */
    skip?: number
    distinct?: Client_sessionScalarFieldEnum | Client_sessionScalarFieldEnum[]
  }


  /**
   * client_session create
   */
  export type client_sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * The data needed to create a client_session.
     */
    data: XOR<client_sessionCreateInput, client_sessionUncheckedCreateInput>
  }


  /**
   * client_session createMany
   */
  export type client_sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_sessions.
     */
    data: client_sessionCreateManyInput | client_sessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_session update
   */
  export type client_sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * The data needed to update a client_session.
     */
    data: XOR<client_sessionUpdateInput, client_sessionUncheckedUpdateInput>
    /**
     * Choose, which client_session to update.
     */
    where: client_sessionWhereUniqueInput
  }


  /**
   * client_session updateMany
   */
  export type client_sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_sessions.
     */
    data: XOR<client_sessionUpdateManyMutationInput, client_sessionUncheckedUpdateManyInput>
    /**
     * Filter which client_sessions to update
     */
    where?: client_sessionWhereInput
  }


  /**
   * client_session upsert
   */
  export type client_sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * The filter to search for the client_session to update in case it exists.
     */
    where: client_sessionWhereUniqueInput
    /**
     * In case the client_session found by the `where` argument doesn't exist, create a new client_session with this data.
     */
    create: XOR<client_sessionCreateInput, client_sessionUncheckedCreateInput>
    /**
     * In case the client_session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_sessionUpdateInput, client_sessionUncheckedUpdateInput>
  }


  /**
   * client_session delete
   */
  export type client_sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
    /**
     * Filter which client_session to delete.
     */
    where: client_sessionWhereUniqueInput
  }


  /**
   * client_session deleteMany
   */
  export type client_sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_sessions to delete
     */
    where?: client_sessionWhereInput
  }


  /**
   * client_session without action
   */
  export type client_sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session
     */
    select?: client_sessionSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_sessionWhereInput = {
    AND?: client_sessionWhereInput | client_sessionWhereInput[]
    OR?: client_sessionWhereInput[]
    NOT?: client_sessionWhereInput | client_sessionWhereInput[]
    id?: IntFilter<"client_session"> | number
    domain?: StringFilter<"client_session"> | string
    props?: JsonFilter<"client_session">
    groups?: JsonFilter<"client_session">
  }

  export type client_sessionOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_sessionWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_sessionWhereInput | client_sessionWhereInput[]
    OR?: client_sessionWhereInput[]
    NOT?: client_sessionWhereInput | client_sessionWhereInput[]
    props?: JsonFilter<"client_session">
    groups?: JsonFilter<"client_session">
  }, "id" | "domain">

  export type client_sessionOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_sessionCountOrderByAggregateInput
    _avg?: client_sessionAvgOrderByAggregateInput
    _max?: client_sessionMaxOrderByAggregateInput
    _min?: client_sessionMinOrderByAggregateInput
    _sum?: client_sessionSumOrderByAggregateInput
  }

  export type client_sessionScalarWhereWithAggregatesInput = {
    AND?: client_sessionScalarWhereWithAggregatesInput | client_sessionScalarWhereWithAggregatesInput[]
    OR?: client_sessionScalarWhereWithAggregatesInput[]
    NOT?: client_sessionScalarWhereWithAggregatesInput | client_sessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_session"> | number
    domain?: StringWithAggregatesFilter<"client_session"> | string
    props?: JsonWithAggregatesFilter<"client_session">
    groups?: JsonWithAggregatesFilter<"client_session">
  }

  export type client_sessionCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_sessionUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_sessionUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_sessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_sessionCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_sessionUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_sessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_sessionCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_sessionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_sessionMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_sessionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_sessionDefaultArgs instead
     */
    export type client_sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_sessionDefaultArgs<ExtArgs>

    export const Client_sessionScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_sessionScalarFieldEnum = (typeof Client_sessionScalarFieldEnum)[keyof typeof Client_sessionScalarFieldEnum]
    