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

export type authenticator_config_entry = $Result.DefaultSelection<$authenticator_config_entryPayload>


/**
   * Model authenticator_config_entry
   */

export type AggregateAuthenticator_config_entry = {
    _count: Authenticator_config_entryCountAggregateOutputType | null
    _avg: Authenticator_config_entryAvgAggregateOutputType | null
    _sum: Authenticator_config_entrySumAggregateOutputType | null
    _min: Authenticator_config_entryMinAggregateOutputType | null
    _max: Authenticator_config_entryMaxAggregateOutputType | null
  }

  export type Authenticator_config_entryAvgAggregateOutputType = {
    id: number | null
  }

  export type Authenticator_config_entrySumAggregateOutputType = {
    id: number | null
  }

  export type Authenticator_config_entryMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Authenticator_config_entryMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Authenticator_config_entryCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Authenticator_config_entryAvgAggregateInputType = {
    id?: true
  }

  export type Authenticator_config_entrySumAggregateInputType = {
    id?: true
  }

  export type Authenticator_config_entryMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Authenticator_config_entryMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Authenticator_config_entryCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Authenticator_config_entryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authenticator_config_entry to aggregate.
     */
    where?: authenticator_config_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authenticator_config_entrys to fetch.
     */
    orderBy?: authenticator_config_entryOrderByWithRelationInput | authenticator_config_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authenticator_config_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authenticator_config_entrys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authenticator_config_entrys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authenticator_config_entrys
    **/
    _count?: true | Authenticator_config_entryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Authenticator_config_entryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Authenticator_config_entrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Authenticator_config_entryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Authenticator_config_entryMaxAggregateInputType
  }

  export type GetAuthenticator_config_entryAggregateType<T extends Authenticator_config_entryAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticator_config_entry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator_config_entry[P]>
      : GetScalarType<T[P], AggregateAuthenticator_config_entry[P]>
  }




  export type authenticator_config_entryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authenticator_config_entryWhereInput
    orderBy?: authenticator_config_entryOrderByWithAggregationInput | authenticator_config_entryOrderByWithAggregationInput[]
    by: Authenticator_config_entryScalarFieldEnum[] | Authenticator_config_entryScalarFieldEnum
    having?: authenticator_config_entryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Authenticator_config_entryCountAggregateInputType | true
    _avg?: Authenticator_config_entryAvgAggregateInputType
    _sum?: Authenticator_config_entrySumAggregateInputType
    _min?: Authenticator_config_entryMinAggregateInputType
    _max?: Authenticator_config_entryMaxAggregateInputType
  }

  export type Authenticator_config_entryGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Authenticator_config_entryCountAggregateOutputType | null
    _avg: Authenticator_config_entryAvgAggregateOutputType | null
    _sum: Authenticator_config_entrySumAggregateOutputType | null
    _min: Authenticator_config_entryMinAggregateOutputType | null
    _max: Authenticator_config_entryMaxAggregateOutputType | null
  }

  type GetAuthenticator_config_entryGroupByPayload<T extends authenticator_config_entryGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Authenticator_config_entryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Authenticator_config_entryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Authenticator_config_entryGroupByOutputType[P]>
            : GetScalarType<T[P], Authenticator_config_entryGroupByOutputType[P]>
        }
      >
    >


  export type authenticator_config_entrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["authenticator_config_entry"]>

  export type authenticator_config_entrySelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $authenticator_config_entryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authenticator_config_entry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["authenticator_config_entry"]>
    composites: {}
  }


  type authenticator_config_entryGetPayload<S extends boolean | null | undefined | authenticator_config_entryDefaultArgs> = $Result.GetResult<$authenticator_config_entryPayload, S>

  type authenticator_config_entryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<authenticator_config_entryFindManyArgs, 'select' | 'include'> & {
      select?: Authenticator_config_entryCountAggregateInputType | true
    }

  export interface authenticator_config_entryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['authenticator_config_entry'], meta: { name: 'authenticator_config_entry' } }
    /**
     * Find zero or one Authenticator_config_entry that matches the filter.
     * @param {authenticator_config_entryFindUniqueArgs} args - Arguments to find a Authenticator_config_entry
     * @example
     * // Get one Authenticator_config_entry
     * const authenticator_config_entry = await prisma.authenticator_config_entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authenticator_config_entryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_config_entryFindUniqueArgs<ExtArgs>>
    ): Prisma__authenticator_config_entryClient<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Authenticator_config_entry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {authenticator_config_entryFindUniqueOrThrowArgs} args - Arguments to find a Authenticator_config_entry
     * @example
     * // Get one Authenticator_config_entry
     * const authenticator_config_entry = await prisma.authenticator_config_entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends authenticator_config_entryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_config_entryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__authenticator_config_entryClient<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Authenticator_config_entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_config_entryFindFirstArgs} args - Arguments to find a Authenticator_config_entry
     * @example
     * // Get one Authenticator_config_entry
     * const authenticator_config_entry = await prisma.authenticator_config_entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authenticator_config_entryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_config_entryFindFirstArgs<ExtArgs>>
    ): Prisma__authenticator_config_entryClient<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Authenticator_config_entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_config_entryFindFirstOrThrowArgs} args - Arguments to find a Authenticator_config_entry
     * @example
     * // Get one Authenticator_config_entry
     * const authenticator_config_entry = await prisma.authenticator_config_entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends authenticator_config_entryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_config_entryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__authenticator_config_entryClient<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Authenticator_config_entrys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_config_entryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticator_config_entrys
     * const authenticator_config_entrys = await prisma.authenticator_config_entry.findMany()
     * 
     * // Get first 10 Authenticator_config_entrys
     * const authenticator_config_entrys = await prisma.authenticator_config_entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authenticator_config_entryWithIdOnly = await prisma.authenticator_config_entry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends authenticator_config_entryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_config_entryFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Authenticator_config_entry.
     * @param {authenticator_config_entryCreateArgs} args - Arguments to create a Authenticator_config_entry.
     * @example
     * // Create one Authenticator_config_entry
     * const Authenticator_config_entry = await prisma.authenticator_config_entry.create({
     *   data: {
     *     // ... data to create a Authenticator_config_entry
     *   }
     * })
     * 
    **/
    create<T extends authenticator_config_entryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_config_entryCreateArgs<ExtArgs>>
    ): Prisma__authenticator_config_entryClient<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Authenticator_config_entrys.
     *     @param {authenticator_config_entryCreateManyArgs} args - Arguments to create many Authenticator_config_entrys.
     *     @example
     *     // Create many Authenticator_config_entrys
     *     const authenticator_config_entry = await prisma.authenticator_config_entry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends authenticator_config_entryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_config_entryCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Authenticator_config_entry.
     * @param {authenticator_config_entryDeleteArgs} args - Arguments to delete one Authenticator_config_entry.
     * @example
     * // Delete one Authenticator_config_entry
     * const Authenticator_config_entry = await prisma.authenticator_config_entry.delete({
     *   where: {
     *     // ... filter to delete one Authenticator_config_entry
     *   }
     * })
     * 
    **/
    delete<T extends authenticator_config_entryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_config_entryDeleteArgs<ExtArgs>>
    ): Prisma__authenticator_config_entryClient<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Authenticator_config_entry.
     * @param {authenticator_config_entryUpdateArgs} args - Arguments to update one Authenticator_config_entry.
     * @example
     * // Update one Authenticator_config_entry
     * const authenticator_config_entry = await prisma.authenticator_config_entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authenticator_config_entryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_config_entryUpdateArgs<ExtArgs>>
    ): Prisma__authenticator_config_entryClient<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Authenticator_config_entrys.
     * @param {authenticator_config_entryDeleteManyArgs} args - Arguments to filter Authenticator_config_entrys to delete.
     * @example
     * // Delete a few Authenticator_config_entrys
     * const { count } = await prisma.authenticator_config_entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authenticator_config_entryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, authenticator_config_entryDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authenticator_config_entrys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_config_entryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticator_config_entrys
     * const authenticator_config_entry = await prisma.authenticator_config_entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authenticator_config_entryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_config_entryUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Authenticator_config_entry.
     * @param {authenticator_config_entryUpsertArgs} args - Arguments to update or create a Authenticator_config_entry.
     * @example
     * // Update or create a Authenticator_config_entry
     * const authenticator_config_entry = await prisma.authenticator_config_entry.upsert({
     *   create: {
     *     // ... data to create a Authenticator_config_entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator_config_entry we want to update
     *   }
     * })
    **/
    upsert<T extends authenticator_config_entryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, authenticator_config_entryUpsertArgs<ExtArgs>>
    ): Prisma__authenticator_config_entryClient<$Result.GetResult<$authenticator_config_entryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Authenticator_config_entrys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_config_entryCountArgs} args - Arguments to filter Authenticator_config_entrys to count.
     * @example
     * // Count the number of Authenticator_config_entrys
     * const count = await prisma.authenticator_config_entry.count({
     *   where: {
     *     // ... the filter for the Authenticator_config_entrys we want to count
     *   }
     * })
    **/
    count<T extends authenticator_config_entryCountArgs>(
      args?: Subset<T, authenticator_config_entryCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Authenticator_config_entryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authenticator_config_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Authenticator_config_entryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Authenticator_config_entryAggregateArgs>(args: Subset<T, Authenticator_config_entryAggregateArgs>): PrismaPromise<GetAuthenticator_config_entryAggregateType<T>>

    /**
     * Group by Authenticator_config_entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticator_config_entryGroupByArgs} args - Group by arguments.
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
      T extends authenticator_config_entryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authenticator_config_entryGroupByArgs['orderBy'] }
        : { orderBy?: authenticator_config_entryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authenticator_config_entryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticator_config_entryGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the authenticator_config_entry model
   */
  readonly fields: authenticator_config_entryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authenticator_config_entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authenticator_config_entryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the authenticator_config_entry model
   */ 
  interface authenticator_config_entryFieldRefs {
    readonly id: FieldRef<"authenticator_config_entry", 'Int'>
    readonly domain: FieldRef<"authenticator_config_entry", 'String'>
    readonly props: FieldRef<"authenticator_config_entry", 'Json'>
    readonly groups: FieldRef<"authenticator_config_entry", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * authenticator_config_entry findUnique
   */
  export type authenticator_config_entryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config_entry to fetch.
     */
    where: authenticator_config_entryWhereUniqueInput
  }


  /**
   * authenticator_config_entry findUniqueOrThrow
   */
  export type authenticator_config_entryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config_entry to fetch.
     */
    where: authenticator_config_entryWhereUniqueInput
  }


  /**
   * authenticator_config_entry findFirst
   */
  export type authenticator_config_entryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config_entry to fetch.
     */
    where?: authenticator_config_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authenticator_config_entrys to fetch.
     */
    orderBy?: authenticator_config_entryOrderByWithRelationInput | authenticator_config_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authenticator_config_entrys.
     */
    cursor?: authenticator_config_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authenticator_config_entrys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authenticator_config_entrys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authenticator_config_entrys.
     */
    distinct?: Authenticator_config_entryScalarFieldEnum | Authenticator_config_entryScalarFieldEnum[]
  }


  /**
   * authenticator_config_entry findFirstOrThrow
   */
  export type authenticator_config_entryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config_entry to fetch.
     */
    where?: authenticator_config_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authenticator_config_entrys to fetch.
     */
    orderBy?: authenticator_config_entryOrderByWithRelationInput | authenticator_config_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authenticator_config_entrys.
     */
    cursor?: authenticator_config_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authenticator_config_entrys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authenticator_config_entrys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authenticator_config_entrys.
     */
    distinct?: Authenticator_config_entryScalarFieldEnum | Authenticator_config_entryScalarFieldEnum[]
  }


  /**
   * authenticator_config_entry findMany
   */
  export type authenticator_config_entryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * Filter, which authenticator_config_entrys to fetch.
     */
    where?: authenticator_config_entryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authenticator_config_entrys to fetch.
     */
    orderBy?: authenticator_config_entryOrderByWithRelationInput | authenticator_config_entryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authenticator_config_entrys.
     */
    cursor?: authenticator_config_entryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authenticator_config_entrys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authenticator_config_entrys.
     */
    skip?: number
    distinct?: Authenticator_config_entryScalarFieldEnum | Authenticator_config_entryScalarFieldEnum[]
  }


  /**
   * authenticator_config_entry create
   */
  export type authenticator_config_entryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * The data needed to create a authenticator_config_entry.
     */
    data: XOR<authenticator_config_entryCreateInput, authenticator_config_entryUncheckedCreateInput>
  }


  /**
   * authenticator_config_entry createMany
   */
  export type authenticator_config_entryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authenticator_config_entrys.
     */
    data: authenticator_config_entryCreateManyInput | authenticator_config_entryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * authenticator_config_entry update
   */
  export type authenticator_config_entryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * The data needed to update a authenticator_config_entry.
     */
    data: XOR<authenticator_config_entryUpdateInput, authenticator_config_entryUncheckedUpdateInput>
    /**
     * Choose, which authenticator_config_entry to update.
     */
    where: authenticator_config_entryWhereUniqueInput
  }


  /**
   * authenticator_config_entry updateMany
   */
  export type authenticator_config_entryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authenticator_config_entrys.
     */
    data: XOR<authenticator_config_entryUpdateManyMutationInput, authenticator_config_entryUncheckedUpdateManyInput>
    /**
     * Filter which authenticator_config_entrys to update
     */
    where?: authenticator_config_entryWhereInput
  }


  /**
   * authenticator_config_entry upsert
   */
  export type authenticator_config_entryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * The filter to search for the authenticator_config_entry to update in case it exists.
     */
    where: authenticator_config_entryWhereUniqueInput
    /**
     * In case the authenticator_config_entry found by the `where` argument doesn't exist, create a new authenticator_config_entry with this data.
     */
    create: XOR<authenticator_config_entryCreateInput, authenticator_config_entryUncheckedCreateInput>
    /**
     * In case the authenticator_config_entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authenticator_config_entryUpdateInput, authenticator_config_entryUncheckedUpdateInput>
  }


  /**
   * authenticator_config_entry delete
   */
  export type authenticator_config_entryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
    /**
     * Filter which authenticator_config_entry to delete.
     */
    where: authenticator_config_entryWhereUniqueInput
  }


  /**
   * authenticator_config_entry deleteMany
   */
  export type authenticator_config_entryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authenticator_config_entrys to delete
     */
    where?: authenticator_config_entryWhereInput
  }


  /**
   * authenticator_config_entry without action
   */
  export type authenticator_config_entryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authenticator_config_entry
     */
    select?: authenticator_config_entrySelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type authenticator_config_entryWhereInput = {
    AND?: authenticator_config_entryWhereInput | authenticator_config_entryWhereInput[]
    OR?: authenticator_config_entryWhereInput[]
    NOT?: authenticator_config_entryWhereInput | authenticator_config_entryWhereInput[]
    id?: IntFilter<"authenticator_config_entry"> | number
    domain?: StringFilter<"authenticator_config_entry"> | string
    props?: JsonFilter<"authenticator_config_entry">
    groups?: JsonFilter<"authenticator_config_entry">
  }

  export type authenticator_config_entryOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type authenticator_config_entryWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: authenticator_config_entryWhereInput | authenticator_config_entryWhereInput[]
    OR?: authenticator_config_entryWhereInput[]
    NOT?: authenticator_config_entryWhereInput | authenticator_config_entryWhereInput[]
    props?: JsonFilter<"authenticator_config_entry">
    groups?: JsonFilter<"authenticator_config_entry">
  }, "id" | "domain">

  export type authenticator_config_entryOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: authenticator_config_entryCountOrderByAggregateInput
    _avg?: authenticator_config_entryAvgOrderByAggregateInput
    _max?: authenticator_config_entryMaxOrderByAggregateInput
    _min?: authenticator_config_entryMinOrderByAggregateInput
    _sum?: authenticator_config_entrySumOrderByAggregateInput
  }

  export type authenticator_config_entryScalarWhereWithAggregatesInput = {
    AND?: authenticator_config_entryScalarWhereWithAggregatesInput | authenticator_config_entryScalarWhereWithAggregatesInput[]
    OR?: authenticator_config_entryScalarWhereWithAggregatesInput[]
    NOT?: authenticator_config_entryScalarWhereWithAggregatesInput | authenticator_config_entryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"authenticator_config_entry"> | number
    domain?: StringWithAggregatesFilter<"authenticator_config_entry"> | string
    props?: JsonWithAggregatesFilter<"authenticator_config_entry">
    groups?: JsonWithAggregatesFilter<"authenticator_config_entry">
  }

  export type authenticator_config_entryCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_config_entryUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_config_entryUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_config_entryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_config_entryCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_config_entryUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_config_entryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type authenticator_config_entryCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type authenticator_config_entryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authenticator_config_entryMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type authenticator_config_entryMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type authenticator_config_entrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use authenticator_config_entryDefaultArgs instead
     */
    export type authenticator_config_entryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = authenticator_config_entryDefaultArgs<ExtArgs>

    export const Authenticator_config_entryScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Authenticator_config_entryScalarFieldEnum = (typeof Authenticator_config_entryScalarFieldEnum)[keyof typeof Authenticator_config_entryScalarFieldEnum]
    