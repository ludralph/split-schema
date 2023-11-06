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

export type client_initial_access = $Result.DefaultSelection<$client_initial_accessPayload>


/**
   * Model client_initial_access
   */

export type AggregateClient_initial_access = {
    _count: Client_initial_accessCountAggregateOutputType | null
    _avg: Client_initial_accessAvgAggregateOutputType | null
    _sum: Client_initial_accessSumAggregateOutputType | null
    _min: Client_initial_accessMinAggregateOutputType | null
    _max: Client_initial_accessMaxAggregateOutputType | null
  }

  export type Client_initial_accessAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_initial_accessSumAggregateOutputType = {
    id: number | null
  }

  export type Client_initial_accessMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_initial_accessMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_initial_accessCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_initial_accessAvgAggregateInputType = {
    id?: true
  }

  export type Client_initial_accessSumAggregateInputType = {
    id?: true
  }

  export type Client_initial_accessMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_initial_accessMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_initial_accessCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_initial_accessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_initial_access to aggregate.
     */
    where?: client_initial_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_initial_accesss to fetch.
     */
    orderBy?: client_initial_accessOrderByWithRelationInput | client_initial_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_initial_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_initial_accesss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_initial_accesss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_initial_accesss
    **/
    _count?: true | Client_initial_accessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_initial_accessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_initial_accessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_initial_accessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_initial_accessMaxAggregateInputType
  }

  export type GetClient_initial_accessAggregateType<T extends Client_initial_accessAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_initial_access]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_initial_access[P]>
      : GetScalarType<T[P], AggregateClient_initial_access[P]>
  }




  export type client_initial_accessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_initial_accessWhereInput
    orderBy?: client_initial_accessOrderByWithAggregationInput | client_initial_accessOrderByWithAggregationInput[]
    by: Client_initial_accessScalarFieldEnum[] | Client_initial_accessScalarFieldEnum
    having?: client_initial_accessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_initial_accessCountAggregateInputType | true
    _avg?: Client_initial_accessAvgAggregateInputType
    _sum?: Client_initial_accessSumAggregateInputType
    _min?: Client_initial_accessMinAggregateInputType
    _max?: Client_initial_accessMaxAggregateInputType
  }

  export type Client_initial_accessGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_initial_accessCountAggregateOutputType | null
    _avg: Client_initial_accessAvgAggregateOutputType | null
    _sum: Client_initial_accessSumAggregateOutputType | null
    _min: Client_initial_accessMinAggregateOutputType | null
    _max: Client_initial_accessMaxAggregateOutputType | null
  }

  type GetClient_initial_accessGroupByPayload<T extends client_initial_accessGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_initial_accessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_initial_accessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_initial_accessGroupByOutputType[P]>
            : GetScalarType<T[P], Client_initial_accessGroupByOutputType[P]>
        }
      >
    >


  export type client_initial_accessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_initial_access"]>

  export type client_initial_accessSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_initial_accessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_initial_access"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_initial_access"]>
    composites: {}
  }


  type client_initial_accessGetPayload<S extends boolean | null | undefined | client_initial_accessDefaultArgs> = $Result.GetResult<$client_initial_accessPayload, S>

  type client_initial_accessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_initial_accessFindManyArgs, 'select' | 'include'> & {
      select?: Client_initial_accessCountAggregateInputType | true
    }

  export interface client_initial_accessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_initial_access'], meta: { name: 'client_initial_access' } }
    /**
     * Find zero or one Client_initial_access that matches the filter.
     * @param {client_initial_accessFindUniqueArgs} args - Arguments to find a Client_initial_access
     * @example
     * // Get one Client_initial_access
     * const client_initial_access = await prisma.client_initial_access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_initial_accessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_initial_accessFindUniqueArgs<ExtArgs>>
    ): Prisma__client_initial_accessClient<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_initial_access that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_initial_accessFindUniqueOrThrowArgs} args - Arguments to find a Client_initial_access
     * @example
     * // Get one Client_initial_access
     * const client_initial_access = await prisma.client_initial_access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_initial_accessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_initial_accessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_initial_accessClient<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_initial_access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_initial_accessFindFirstArgs} args - Arguments to find a Client_initial_access
     * @example
     * // Get one Client_initial_access
     * const client_initial_access = await prisma.client_initial_access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_initial_accessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_initial_accessFindFirstArgs<ExtArgs>>
    ): Prisma__client_initial_accessClient<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_initial_access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_initial_accessFindFirstOrThrowArgs} args - Arguments to find a Client_initial_access
     * @example
     * // Get one Client_initial_access
     * const client_initial_access = await prisma.client_initial_access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_initial_accessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_initial_accessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_initial_accessClient<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_initial_accesss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_initial_accessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_initial_accesss
     * const client_initial_accesss = await prisma.client_initial_access.findMany()
     * 
     * // Get first 10 Client_initial_accesss
     * const client_initial_accesss = await prisma.client_initial_access.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_initial_accessWithIdOnly = await prisma.client_initial_access.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_initial_accessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_initial_accessFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_initial_access.
     * @param {client_initial_accessCreateArgs} args - Arguments to create a Client_initial_access.
     * @example
     * // Create one Client_initial_access
     * const Client_initial_access = await prisma.client_initial_access.create({
     *   data: {
     *     // ... data to create a Client_initial_access
     *   }
     * })
     * 
    **/
    create<T extends client_initial_accessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_initial_accessCreateArgs<ExtArgs>>
    ): Prisma__client_initial_accessClient<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_initial_accesss.
     *     @param {client_initial_accessCreateManyArgs} args - Arguments to create many Client_initial_accesss.
     *     @example
     *     // Create many Client_initial_accesss
     *     const client_initial_access = await prisma.client_initial_access.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_initial_accessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_initial_accessCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_initial_access.
     * @param {client_initial_accessDeleteArgs} args - Arguments to delete one Client_initial_access.
     * @example
     * // Delete one Client_initial_access
     * const Client_initial_access = await prisma.client_initial_access.delete({
     *   where: {
     *     // ... filter to delete one Client_initial_access
     *   }
     * })
     * 
    **/
    delete<T extends client_initial_accessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_initial_accessDeleteArgs<ExtArgs>>
    ): Prisma__client_initial_accessClient<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_initial_access.
     * @param {client_initial_accessUpdateArgs} args - Arguments to update one Client_initial_access.
     * @example
     * // Update one Client_initial_access
     * const client_initial_access = await prisma.client_initial_access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_initial_accessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_initial_accessUpdateArgs<ExtArgs>>
    ): Prisma__client_initial_accessClient<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_initial_accesss.
     * @param {client_initial_accessDeleteManyArgs} args - Arguments to filter Client_initial_accesss to delete.
     * @example
     * // Delete a few Client_initial_accesss
     * const { count } = await prisma.client_initial_access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_initial_accessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_initial_accessDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_initial_accesss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_initial_accessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_initial_accesss
     * const client_initial_access = await prisma.client_initial_access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_initial_accessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_initial_accessUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_initial_access.
     * @param {client_initial_accessUpsertArgs} args - Arguments to update or create a Client_initial_access.
     * @example
     * // Update or create a Client_initial_access
     * const client_initial_access = await prisma.client_initial_access.upsert({
     *   create: {
     *     // ... data to create a Client_initial_access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_initial_access we want to update
     *   }
     * })
    **/
    upsert<T extends client_initial_accessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_initial_accessUpsertArgs<ExtArgs>>
    ): Prisma__client_initial_accessClient<$Result.GetResult<$client_initial_accessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_initial_accesss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_initial_accessCountArgs} args - Arguments to filter Client_initial_accesss to count.
     * @example
     * // Count the number of Client_initial_accesss
     * const count = await prisma.client_initial_access.count({
     *   where: {
     *     // ... the filter for the Client_initial_accesss we want to count
     *   }
     * })
    **/
    count<T extends client_initial_accessCountArgs>(
      args?: Subset<T, client_initial_accessCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_initial_accessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_initial_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_initial_accessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_initial_accessAggregateArgs>(args: Subset<T, Client_initial_accessAggregateArgs>): PrismaPromise<GetClient_initial_accessAggregateType<T>>

    /**
     * Group by Client_initial_access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_initial_accessGroupByArgs} args - Group by arguments.
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
      T extends client_initial_accessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_initial_accessGroupByArgs['orderBy'] }
        : { orderBy?: client_initial_accessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_initial_accessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_initial_accessGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_initial_access model
   */
  readonly fields: client_initial_accessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_initial_access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_initial_accessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_initial_access model
   */ 
  interface client_initial_accessFieldRefs {
    readonly id: FieldRef<"client_initial_access", 'Int'>
    readonly domain: FieldRef<"client_initial_access", 'String'>
    readonly props: FieldRef<"client_initial_access", 'Json'>
    readonly groups: FieldRef<"client_initial_access", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_initial_access findUnique
   */
  export type client_initial_accessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * Filter, which client_initial_access to fetch.
     */
    where: client_initial_accessWhereUniqueInput
  }


  /**
   * client_initial_access findUniqueOrThrow
   */
  export type client_initial_accessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * Filter, which client_initial_access to fetch.
     */
    where: client_initial_accessWhereUniqueInput
  }


  /**
   * client_initial_access findFirst
   */
  export type client_initial_accessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * Filter, which client_initial_access to fetch.
     */
    where?: client_initial_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_initial_accesss to fetch.
     */
    orderBy?: client_initial_accessOrderByWithRelationInput | client_initial_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_initial_accesss.
     */
    cursor?: client_initial_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_initial_accesss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_initial_accesss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_initial_accesss.
     */
    distinct?: Client_initial_accessScalarFieldEnum | Client_initial_accessScalarFieldEnum[]
  }


  /**
   * client_initial_access findFirstOrThrow
   */
  export type client_initial_accessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * Filter, which client_initial_access to fetch.
     */
    where?: client_initial_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_initial_accesss to fetch.
     */
    orderBy?: client_initial_accessOrderByWithRelationInput | client_initial_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_initial_accesss.
     */
    cursor?: client_initial_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_initial_accesss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_initial_accesss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_initial_accesss.
     */
    distinct?: Client_initial_accessScalarFieldEnum | Client_initial_accessScalarFieldEnum[]
  }


  /**
   * client_initial_access findMany
   */
  export type client_initial_accessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * Filter, which client_initial_accesss to fetch.
     */
    where?: client_initial_accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_initial_accesss to fetch.
     */
    orderBy?: client_initial_accessOrderByWithRelationInput | client_initial_accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_initial_accesss.
     */
    cursor?: client_initial_accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_initial_accesss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_initial_accesss.
     */
    skip?: number
    distinct?: Client_initial_accessScalarFieldEnum | Client_initial_accessScalarFieldEnum[]
  }


  /**
   * client_initial_access create
   */
  export type client_initial_accessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * The data needed to create a client_initial_access.
     */
    data: XOR<client_initial_accessCreateInput, client_initial_accessUncheckedCreateInput>
  }


  /**
   * client_initial_access createMany
   */
  export type client_initial_accessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_initial_accesss.
     */
    data: client_initial_accessCreateManyInput | client_initial_accessCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_initial_access update
   */
  export type client_initial_accessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * The data needed to update a client_initial_access.
     */
    data: XOR<client_initial_accessUpdateInput, client_initial_accessUncheckedUpdateInput>
    /**
     * Choose, which client_initial_access to update.
     */
    where: client_initial_accessWhereUniqueInput
  }


  /**
   * client_initial_access updateMany
   */
  export type client_initial_accessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_initial_accesss.
     */
    data: XOR<client_initial_accessUpdateManyMutationInput, client_initial_accessUncheckedUpdateManyInput>
    /**
     * Filter which client_initial_accesss to update
     */
    where?: client_initial_accessWhereInput
  }


  /**
   * client_initial_access upsert
   */
  export type client_initial_accessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * The filter to search for the client_initial_access to update in case it exists.
     */
    where: client_initial_accessWhereUniqueInput
    /**
     * In case the client_initial_access found by the `where` argument doesn't exist, create a new client_initial_access with this data.
     */
    create: XOR<client_initial_accessCreateInput, client_initial_accessUncheckedCreateInput>
    /**
     * In case the client_initial_access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_initial_accessUpdateInput, client_initial_accessUncheckedUpdateInput>
  }


  /**
   * client_initial_access delete
   */
  export type client_initial_accessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
    /**
     * Filter which client_initial_access to delete.
     */
    where: client_initial_accessWhereUniqueInput
  }


  /**
   * client_initial_access deleteMany
   */
  export type client_initial_accessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_initial_accesss to delete
     */
    where?: client_initial_accessWhereInput
  }


  /**
   * client_initial_access without action
   */
  export type client_initial_accessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_initial_access
     */
    select?: client_initial_accessSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_initial_accessWhereInput = {
    AND?: client_initial_accessWhereInput | client_initial_accessWhereInput[]
    OR?: client_initial_accessWhereInput[]
    NOT?: client_initial_accessWhereInput | client_initial_accessWhereInput[]
    id?: IntFilter<"client_initial_access"> | number
    domain?: StringFilter<"client_initial_access"> | string
    props?: JsonFilter<"client_initial_access">
    groups?: JsonFilter<"client_initial_access">
  }

  export type client_initial_accessOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_initial_accessWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_initial_accessWhereInput | client_initial_accessWhereInput[]
    OR?: client_initial_accessWhereInput[]
    NOT?: client_initial_accessWhereInput | client_initial_accessWhereInput[]
    props?: JsonFilter<"client_initial_access">
    groups?: JsonFilter<"client_initial_access">
  }, "id" | "domain">

  export type client_initial_accessOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_initial_accessCountOrderByAggregateInput
    _avg?: client_initial_accessAvgOrderByAggregateInput
    _max?: client_initial_accessMaxOrderByAggregateInput
    _min?: client_initial_accessMinOrderByAggregateInput
    _sum?: client_initial_accessSumOrderByAggregateInput
  }

  export type client_initial_accessScalarWhereWithAggregatesInput = {
    AND?: client_initial_accessScalarWhereWithAggregatesInput | client_initial_accessScalarWhereWithAggregatesInput[]
    OR?: client_initial_accessScalarWhereWithAggregatesInput[]
    NOT?: client_initial_accessScalarWhereWithAggregatesInput | client_initial_accessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_initial_access"> | number
    domain?: StringWithAggregatesFilter<"client_initial_access"> | string
    props?: JsonWithAggregatesFilter<"client_initial_access">
    groups?: JsonWithAggregatesFilter<"client_initial_access">
  }

  export type client_initial_accessCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_initial_accessUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_initial_accessUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_initial_accessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_initial_accessCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_initial_accessUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_initial_accessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_initial_accessCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_initial_accessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_initial_accessMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_initial_accessMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_initial_accessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_initial_accessDefaultArgs instead
     */
    export type client_initial_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_initial_accessDefaultArgs<ExtArgs>

    export const Client_initial_accessScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_initial_accessScalarFieldEnum = (typeof Client_initial_accessScalarFieldEnum)[keyof typeof Client_initial_accessScalarFieldEnum]
    