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

export type broker_link = $Result.DefaultSelection<$broker_linkPayload>


/**
   * Model broker_link
   */

export type AggregateBroker_link = {
    _count: Broker_linkCountAggregateOutputType | null
    _avg: Broker_linkAvgAggregateOutputType | null
    _sum: Broker_linkSumAggregateOutputType | null
    _min: Broker_linkMinAggregateOutputType | null
    _max: Broker_linkMaxAggregateOutputType | null
  }

  export type Broker_linkAvgAggregateOutputType = {
    id: number | null
  }

  export type Broker_linkSumAggregateOutputType = {
    id: number | null
  }

  export type Broker_linkMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Broker_linkMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Broker_linkCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Broker_linkAvgAggregateInputType = {
    id?: true
  }

  export type Broker_linkSumAggregateInputType = {
    id?: true
  }

  export type Broker_linkMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Broker_linkMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Broker_linkCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Broker_linkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which broker_link to aggregate.
     */
    where?: broker_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broker_links to fetch.
     */
    orderBy?: broker_linkOrderByWithRelationInput | broker_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: broker_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broker_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broker_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned broker_links
    **/
    _count?: true | Broker_linkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Broker_linkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Broker_linkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Broker_linkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Broker_linkMaxAggregateInputType
  }

  export type GetBroker_linkAggregateType<T extends Broker_linkAggregateArgs> = {
        [P in keyof T & keyof AggregateBroker_link]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroker_link[P]>
      : GetScalarType<T[P], AggregateBroker_link[P]>
  }




  export type broker_linkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: broker_linkWhereInput
    orderBy?: broker_linkOrderByWithAggregationInput | broker_linkOrderByWithAggregationInput[]
    by: Broker_linkScalarFieldEnum[] | Broker_linkScalarFieldEnum
    having?: broker_linkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Broker_linkCountAggregateInputType | true
    _avg?: Broker_linkAvgAggregateInputType
    _sum?: Broker_linkSumAggregateInputType
    _min?: Broker_linkMinAggregateInputType
    _max?: Broker_linkMaxAggregateInputType
  }

  export type Broker_linkGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Broker_linkCountAggregateOutputType | null
    _avg: Broker_linkAvgAggregateOutputType | null
    _sum: Broker_linkSumAggregateOutputType | null
    _min: Broker_linkMinAggregateOutputType | null
    _max: Broker_linkMaxAggregateOutputType | null
  }

  type GetBroker_linkGroupByPayload<T extends broker_linkGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Broker_linkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Broker_linkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Broker_linkGroupByOutputType[P]>
            : GetScalarType<T[P], Broker_linkGroupByOutputType[P]>
        }
      >
    >


  export type broker_linkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["broker_link"]>

  export type broker_linkSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $broker_linkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "broker_link"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["broker_link"]>
    composites: {}
  }


  type broker_linkGetPayload<S extends boolean | null | undefined | broker_linkDefaultArgs> = $Result.GetResult<$broker_linkPayload, S>

  type broker_linkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<broker_linkFindManyArgs, 'select' | 'include'> & {
      select?: Broker_linkCountAggregateInputType | true
    }

  export interface broker_linkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['broker_link'], meta: { name: 'broker_link' } }
    /**
     * Find zero or one Broker_link that matches the filter.
     * @param {broker_linkFindUniqueArgs} args - Arguments to find a Broker_link
     * @example
     * // Get one Broker_link
     * const broker_link = await prisma.broker_link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends broker_linkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, broker_linkFindUniqueArgs<ExtArgs>>
    ): Prisma__broker_linkClient<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Broker_link that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {broker_linkFindUniqueOrThrowArgs} args - Arguments to find a Broker_link
     * @example
     * // Get one Broker_link
     * const broker_link = await prisma.broker_link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends broker_linkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, broker_linkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__broker_linkClient<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Broker_link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broker_linkFindFirstArgs} args - Arguments to find a Broker_link
     * @example
     * // Get one Broker_link
     * const broker_link = await prisma.broker_link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends broker_linkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, broker_linkFindFirstArgs<ExtArgs>>
    ): Prisma__broker_linkClient<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Broker_link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broker_linkFindFirstOrThrowArgs} args - Arguments to find a Broker_link
     * @example
     * // Get one Broker_link
     * const broker_link = await prisma.broker_link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends broker_linkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, broker_linkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__broker_linkClient<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Broker_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broker_linkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Broker_links
     * const broker_links = await prisma.broker_link.findMany()
     * 
     * // Get first 10 Broker_links
     * const broker_links = await prisma.broker_link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const broker_linkWithIdOnly = await prisma.broker_link.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends broker_linkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, broker_linkFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Broker_link.
     * @param {broker_linkCreateArgs} args - Arguments to create a Broker_link.
     * @example
     * // Create one Broker_link
     * const Broker_link = await prisma.broker_link.create({
     *   data: {
     *     // ... data to create a Broker_link
     *   }
     * })
     * 
    **/
    create<T extends broker_linkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, broker_linkCreateArgs<ExtArgs>>
    ): Prisma__broker_linkClient<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Broker_links.
     *     @param {broker_linkCreateManyArgs} args - Arguments to create many Broker_links.
     *     @example
     *     // Create many Broker_links
     *     const broker_link = await prisma.broker_link.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends broker_linkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, broker_linkCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Broker_link.
     * @param {broker_linkDeleteArgs} args - Arguments to delete one Broker_link.
     * @example
     * // Delete one Broker_link
     * const Broker_link = await prisma.broker_link.delete({
     *   where: {
     *     // ... filter to delete one Broker_link
     *   }
     * })
     * 
    **/
    delete<T extends broker_linkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, broker_linkDeleteArgs<ExtArgs>>
    ): Prisma__broker_linkClient<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Broker_link.
     * @param {broker_linkUpdateArgs} args - Arguments to update one Broker_link.
     * @example
     * // Update one Broker_link
     * const broker_link = await prisma.broker_link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends broker_linkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, broker_linkUpdateArgs<ExtArgs>>
    ): Prisma__broker_linkClient<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Broker_links.
     * @param {broker_linkDeleteManyArgs} args - Arguments to filter Broker_links to delete.
     * @example
     * // Delete a few Broker_links
     * const { count } = await prisma.broker_link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends broker_linkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, broker_linkDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Broker_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broker_linkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Broker_links
     * const broker_link = await prisma.broker_link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends broker_linkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, broker_linkUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Broker_link.
     * @param {broker_linkUpsertArgs} args - Arguments to update or create a Broker_link.
     * @example
     * // Update or create a Broker_link
     * const broker_link = await prisma.broker_link.upsert({
     *   create: {
     *     // ... data to create a Broker_link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Broker_link we want to update
     *   }
     * })
    **/
    upsert<T extends broker_linkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, broker_linkUpsertArgs<ExtArgs>>
    ): Prisma__broker_linkClient<$Result.GetResult<$broker_linkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Broker_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broker_linkCountArgs} args - Arguments to filter Broker_links to count.
     * @example
     * // Count the number of Broker_links
     * const count = await prisma.broker_link.count({
     *   where: {
     *     // ... the filter for the Broker_links we want to count
     *   }
     * })
    **/
    count<T extends broker_linkCountArgs>(
      args?: Subset<T, broker_linkCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Broker_linkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Broker_link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Broker_linkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Broker_linkAggregateArgs>(args: Subset<T, Broker_linkAggregateArgs>): PrismaPromise<GetBroker_linkAggregateType<T>>

    /**
     * Group by Broker_link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {broker_linkGroupByArgs} args - Group by arguments.
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
      T extends broker_linkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: broker_linkGroupByArgs['orderBy'] }
        : { orderBy?: broker_linkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, broker_linkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroker_linkGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the broker_link model
   */
  readonly fields: broker_linkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for broker_link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__broker_linkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the broker_link model
   */ 
  interface broker_linkFieldRefs {
    readonly id: FieldRef<"broker_link", 'Int'>
    readonly domain: FieldRef<"broker_link", 'String'>
    readonly props: FieldRef<"broker_link", 'Json'>
    readonly groups: FieldRef<"broker_link", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * broker_link findUnique
   */
  export type broker_linkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * Filter, which broker_link to fetch.
     */
    where: broker_linkWhereUniqueInput
  }


  /**
   * broker_link findUniqueOrThrow
   */
  export type broker_linkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * Filter, which broker_link to fetch.
     */
    where: broker_linkWhereUniqueInput
  }


  /**
   * broker_link findFirst
   */
  export type broker_linkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * Filter, which broker_link to fetch.
     */
    where?: broker_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broker_links to fetch.
     */
    orderBy?: broker_linkOrderByWithRelationInput | broker_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for broker_links.
     */
    cursor?: broker_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broker_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broker_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of broker_links.
     */
    distinct?: Broker_linkScalarFieldEnum | Broker_linkScalarFieldEnum[]
  }


  /**
   * broker_link findFirstOrThrow
   */
  export type broker_linkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * Filter, which broker_link to fetch.
     */
    where?: broker_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broker_links to fetch.
     */
    orderBy?: broker_linkOrderByWithRelationInput | broker_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for broker_links.
     */
    cursor?: broker_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broker_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broker_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of broker_links.
     */
    distinct?: Broker_linkScalarFieldEnum | Broker_linkScalarFieldEnum[]
  }


  /**
   * broker_link findMany
   */
  export type broker_linkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * Filter, which broker_links to fetch.
     */
    where?: broker_linkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of broker_links to fetch.
     */
    orderBy?: broker_linkOrderByWithRelationInput | broker_linkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing broker_links.
     */
    cursor?: broker_linkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` broker_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` broker_links.
     */
    skip?: number
    distinct?: Broker_linkScalarFieldEnum | Broker_linkScalarFieldEnum[]
  }


  /**
   * broker_link create
   */
  export type broker_linkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * The data needed to create a broker_link.
     */
    data: XOR<broker_linkCreateInput, broker_linkUncheckedCreateInput>
  }


  /**
   * broker_link createMany
   */
  export type broker_linkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many broker_links.
     */
    data: broker_linkCreateManyInput | broker_linkCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * broker_link update
   */
  export type broker_linkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * The data needed to update a broker_link.
     */
    data: XOR<broker_linkUpdateInput, broker_linkUncheckedUpdateInput>
    /**
     * Choose, which broker_link to update.
     */
    where: broker_linkWhereUniqueInput
  }


  /**
   * broker_link updateMany
   */
  export type broker_linkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update broker_links.
     */
    data: XOR<broker_linkUpdateManyMutationInput, broker_linkUncheckedUpdateManyInput>
    /**
     * Filter which broker_links to update
     */
    where?: broker_linkWhereInput
  }


  /**
   * broker_link upsert
   */
  export type broker_linkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * The filter to search for the broker_link to update in case it exists.
     */
    where: broker_linkWhereUniqueInput
    /**
     * In case the broker_link found by the `where` argument doesn't exist, create a new broker_link with this data.
     */
    create: XOR<broker_linkCreateInput, broker_linkUncheckedCreateInput>
    /**
     * In case the broker_link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<broker_linkUpdateInput, broker_linkUncheckedUpdateInput>
  }


  /**
   * broker_link delete
   */
  export type broker_linkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
    /**
     * Filter which broker_link to delete.
     */
    where: broker_linkWhereUniqueInput
  }


  /**
   * broker_link deleteMany
   */
  export type broker_linkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which broker_links to delete
     */
    where?: broker_linkWhereInput
  }


  /**
   * broker_link without action
   */
  export type broker_linkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the broker_link
     */
    select?: broker_linkSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type broker_linkWhereInput = {
    AND?: broker_linkWhereInput | broker_linkWhereInput[]
    OR?: broker_linkWhereInput[]
    NOT?: broker_linkWhereInput | broker_linkWhereInput[]
    id?: IntFilter<"broker_link"> | number
    domain?: StringFilter<"broker_link"> | string
    props?: JsonFilter<"broker_link">
    groups?: JsonFilter<"broker_link">
  }

  export type broker_linkOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type broker_linkWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: broker_linkWhereInput | broker_linkWhereInput[]
    OR?: broker_linkWhereInput[]
    NOT?: broker_linkWhereInput | broker_linkWhereInput[]
    props?: JsonFilter<"broker_link">
    groups?: JsonFilter<"broker_link">
  }, "id" | "domain">

  export type broker_linkOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: broker_linkCountOrderByAggregateInput
    _avg?: broker_linkAvgOrderByAggregateInput
    _max?: broker_linkMaxOrderByAggregateInput
    _min?: broker_linkMinOrderByAggregateInput
    _sum?: broker_linkSumOrderByAggregateInput
  }

  export type broker_linkScalarWhereWithAggregatesInput = {
    AND?: broker_linkScalarWhereWithAggregatesInput | broker_linkScalarWhereWithAggregatesInput[]
    OR?: broker_linkScalarWhereWithAggregatesInput[]
    NOT?: broker_linkScalarWhereWithAggregatesInput | broker_linkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"broker_link"> | number
    domain?: StringWithAggregatesFilter<"broker_link"> | string
    props?: JsonWithAggregatesFilter<"broker_link">
    groups?: JsonWithAggregatesFilter<"broker_link">
  }

  export type broker_linkCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type broker_linkUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type broker_linkUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type broker_linkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type broker_linkCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type broker_linkUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type broker_linkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type broker_linkCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type broker_linkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type broker_linkMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type broker_linkMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type broker_linkSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use broker_linkDefaultArgs instead
     */
    export type broker_linkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = broker_linkDefaultArgs<ExtArgs>

    export const Broker_linkScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Broker_linkScalarFieldEnum = (typeof Broker_linkScalarFieldEnum)[keyof typeof Broker_linkScalarFieldEnum]
    